#!/usr/bin/env bash
rm -fR /Users/Gianca/Google\ Drive/www/leidyDist/*
cp -R dist/leidy/* /Users/Gianca/Google\ Drive/www/leidyDist
cd /Users/Gianca/Google\ Drive/www/leidyDist/
git add .
git commit -m "new version"
git push -u origin master
cd /Users/Gianca/Google\ Drive/GitHub/lady
