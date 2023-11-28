import requests
import json
import pandas as pd
from dateutil import parser
import matplotlib
import matplotlib.pyplot as plt

import os
import urllib.request
from tqdm import tqdm
class Updater():
    def __init__(self):
        self.base_url = "https://api.notion.com/v1/databases/"
        self.publication_database_id = '54cb3960b40246e2be42cfb58e2b45fd'
        self.news_database_id = '48e5e114527c41f583ee0903718fffb7'
        self.people_database_id = '778b56a297cc4fd7b45d8f40c3d4e1cb'
        self.key = "secret_dhDJCxIGksOzhxiKis5UfH8VWA6JXTnF5T44BANarrG"
        self.headers = {"Authorization":self.key, "Notion-Version":"2022-06-28", "Content-Type":"application/json"}
    def update_publication(self, download_thumbnails=True):
        query_url = self.base_url+self.publication_database_id+"/query"
        print("query_url:", query_url)
        filter_rule={}
        sort_rules = [dict(property="ConferenceDate", direction="descending")]
        query_data = dict(page_size=100, sorts=sort_rules)

        datalist = fetch_notion_db(query_url, self.headers, query_data)
        df = pd.DataFrame(datalist)
        df.to_csv("db_bak_publist.csv")

        all_str = convertPub2gruvi(datalist, download_thumbnails=download_thumbnails)
        with open("../_data/old_manual_publist_stopped_at_2021.yml", "r") as f:
            old_str = f.read()
        with open("../_data/publist.yml", "w") as f:
            f.write(all_str + "\n ################################# BELOW: MANUAL ENTRIES ################################# \n" \
                    + old_str)
        print(all_str)
    def update_news(self): # Still need some effort to make it work.
        # The most challenging part is to parse the rich text, and turn it into markdown. Also need to download the images.
        query_url = os.path.join(self.base_url, self.news_database_id, "query")
        print("query_url:", query_url)
        filter_rule={}
        sort_rules = [dict(property="Date", direction="descending")]
        query_data = dict(page_size=100, sorts=sort_rules)
        datalist = fetch_notion_db(query_url, self.headers, query_data)
        df = pd.DataFrame(datalist)
        df.to_csv("db_bak_news.csv")


#%%
import copy
def fetch_notion_db(query_url, headers, query_data):
    query_data = copy.deepcopy(query_data)
    result_list = []
    counter = 0
    #query_data["start_cursor"] = "undefined"
    while True:
        print(counter)
        res = json.loads( requests.post(query_url, headers=headers, data=json.dumps(query_data)).content.decode() )
        #print(res)
        has_more = res.get("has_more")
        result_list = result_list + res["results"]
        print(len(result_list))
        print(has_more, res["next_cursor"], query_data.get("start_cursor", None))
        if has_more is None or has_more==False:
            break
        query_data["start_cursor"] = res["next_cursor"]
        #query_data["start_cursor"] = res["next_cursor"]
        counter+=1
    return result_list

#%%

def gather_plain_text(richtext_obj):
    richtext_list = richtext_obj["rich_text"]
    plain = ""
    for rt in richtext_list:
        plain = plain + rt["plain_text"]
    return plain
def parse_thumbnail(thumb_obj):
    thumbfs  = thumb_obj["files"]
    assert len(thumbfs)>0
    thumbf = thumbfs[0]
    if thumbf["type"]=="external":
        thumbnail_link = thumbf["external"]["url"]
    else:
        thumbnail_link = thumbf["file"]["url"]
    return thumbnail_link
def convertPub2gruvi(datalist, download_thumbnails=True):
    if download_thumbnails and not os.path.exists("downloads"):
        os.makedirs("downloads")
    all_str = ""
    for i, data in enumerate(datalist):
        dID = data["id"]
        diprop = data["properties"]
        year, title, authors, paper_link, venue = None, None, None, None, None
        if diprop.get("ConferenceDate", None) is not None:
            date = diprop["ConferenceDate"]["date"]["start"]
            year = date[:4]
        title = diprop["Name"]["title"][0]["text"]["content"]
        if diprop.get("Authors", None) is not None:
            authors  = gather_plain_text( diprop["Authors"] )
        if diprop.get("paper_link", None) is not None:
            paper_link  = gather_plain_text( diprop["paper_link"] )
        if diprop.get("project_link", None) is not None:
            project_link  = gather_plain_text( diprop["project_link"] )
        if diprop.get("video_link", None) is not None:
            video_link  = gather_plain_text( diprop["video_link"] )
        if diprop.get("presentation_link", None) is not None:
            presentation_link  = gather_plain_text( diprop["presentation_link"] )
        if diprop.get("Venue", None) is not None:
            venue  = gather_plain_text( diprop["Venue"] )
        print(date, title)


        thumbnail_link = parse_thumbnail(diprop["Thumbnail"])
        fsuffix = thumbnail_link.split("?")[0].split(".")[-1]
        thumb_name = date + '_' + dID + '.' + fsuffix 
        if download_thumbnails:
            print(f'Downloading thumbnail {thumb_name} from {thumbnail_link}')
            urllib.request.urlretrieve(thumbnail_link, f"../images/pubpic/{thumb_name}")

        export_str = f"""
- title: >-
    {title}
  image: {thumb_name}
  authors: {authors}
  venue: >-
    {venue}
  year: {year}
  highlight: 1
  pdf: {paper_link}
"""
        if project_link is not None:
            export_str = export_str + f"  project_page: {project_link}\n"
        if video_link is not None and len(video_link)>0:
            export_str = export_str + f"  video: {video_link}\n"
        if presentation_link is not None and len(presentation_link)>0:
            export_str = export_str + f"  presentation: {presentation_link}\n"
        all_str = all_str + export_str+ "\n\n"
    return all_str


#%%
if __name__ == "__main__":
    updater = Updater()
    updater.update_publication(download_thumbnails=True)
    #updater.update_news()
