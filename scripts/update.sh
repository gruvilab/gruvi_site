cd ..
git add .
git commit -m "update"
git push
cd ../gruvi_site/
git pull gruvica gh-pages --no-edit
git push origin  gh-pages

