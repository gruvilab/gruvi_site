# GrUVi website

We are an inter-disciplinary team of researchers exploring and developing novel methods in computer graphics, computer vision, and interactive techniques. Current areas of focus include geometric modelling and processing, image-based modelling, 3D reconstruction, 3D content creation, shape analysis, lighting and reflectance models, and 3D vision for robotics.

The lab was first founded in 1992 by Professor Tom Calvert whose work in human animation led to the now famous LifeForms software and the startup firm Credo Inc. Today, we have a modern infrastructure, supported through two Canadian Foundation for Innovation (CFI) grants and two NSERC Research Tools and Instruments grants. Student support is provided by NSERC Discovery Grants, several NSERC Strategic Project Grants, along with funding from GRAND NCE, MITACS, and Precarn. Three GrUVi faculty have won the prestigious NSERC Discovery Accelerator grants.

We collaborate with gaming, VFX, and geo-map industries and leading researchers from across the globe. One of the industrial internships carried out by members of the lab had won an Award of Excellence from MITACS, the funding agency.

While you will find many of our alumni all across the private sector at places such as Apple, Electronic Arts, Google, and Facebook, some of our best graduates are now professors at Carleton University, University of Calgary, University of Florida, and University of Victoria.

GrUVi Lab is at the Simon Fraser University atop of Burnaby Mountain in the Technology And Science Complex, room TASC 8004. If you'd like to visit, instructions on how to get here are on the main SFU site. If you'd like to correspond with us in other ways, here is our address:

GrUVi Lab, TASC Building 8004
School Of Computing Science
Simon Fraser University
8888 University Drive
Burnaby, B.C. V5A 1S6
Canada

Phone: +1 (778) 782-3610
Fax: +1 (778) 782-3045

Email: haoz (at) sfu.ca

Code is a Copyright of Allan Lab. Code released under the MIT License.

# Usage
This repo (https://github.com/gruvilab/gruvi_site) is the main repo that holds the main website (https://gruvi.cs.sfu.ca/). Please only update website content to this repo.

For publication update, please edit `_data/publist.yml` to modify / add items, and please upload thumbnail image to `images/pubpic/`.

For news update, please edit the content of `_data/news.yml`. And please upload thumbnail images to `images/newspic/`. Make sure to remove the starting `<p>` and the ending `</p>` as the system will automatically adding them, this is to prevent errors.

Directly edit paragraph format with yaml is a bit hard, an alternative way is to edit in a markdown format and then convert.

Steps to do after editing and proofreading the text in markdown:
1. convert the text to html using this site: https://markdowntohtml.com/. 
2. Copy the html code to the search bar to put everything **in a single line**.
3. Create a new news item in `_data/news.yml` and copy the single line html code after the `  text: >-`. Make sure to remove the starting `<p>` and the ending `</p>` as the system will automatically adding them, this is to prevent errors.
4. For the image cover for the news, please put it in `images/newspic` with a un-duplicating name.
After these steps, simply perform git add, commit and push to github operations, the website `gruvi.cs.sfu.ca` will be automatically built and updated with github actions.
5. Commit changes to github repo by running `git add . && git commit -m 'update' && git pull && git push`

To update other contents like people, you can directly edit the yaml files in `_data`

(Obsolete)~~There is two repos for the gruvi site. The currently **active** one is **gruvilab.github.io** (which is gruvi.ca). The old one is gruvi_site (which is gruvi.cs.sfu.ca). When we run the script to sync the update to the active website, the script also push the update to the old site to keep the content the same.
The textural data is stored in _data folder and images in images folder.~~

To build the website locally for faster iteration (github auto CI's speed is slow due to heavy upload), you can use jekyll-docker. After you pulled the jekyll docker image, you can just run `bash docker_build.sh` in the `scripts` folder to build the website and view the built site in `_site` folder. More information about jekyll-docker can be found [here](https://github.com/envygeeks/jekyll-docker/blob/master/README.md)

## Update

As of 2025-12-13, we roll back to the original yaml based update for publication list. The notion database is archived (check with Xingguang for more details).

As of 2024-12-03, only the publication auto-synce is enabled. Use `python scripts/site_updater.py` to fetch the publication records to this repo. For news, please first finish editing on notion (since it is much easier to directly write HTML code in `_data/news.yml`), and then convert it to html (using https://markdowntohtml.com/), copy to the browser's address/URL bar to make the html single line. Then copy the single line html to the correct location in `_data/news.yml`. Notice that you shall remove the initial `<p>` and the ending `</p>` since the server will automatically add them.

As of 2023-06-12, we adopt notion databases to store our new publication data. Notion databases is much easier to manage and very friendly for multi-user editing.
The notion homepage for our website is [here](https://www.notion.so/yanxg/SFU-GrUVi-Website-Databases-052be593dbe246668fdb123b682debb8).
Some scripts for fetching notion data to the website repo can be found in the `scripts` folder.



