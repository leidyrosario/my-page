#!/usr/bin/env bash
rm -fR /Users/lady_rosario/Documenti/leidyDist/*
cp -R dist/leidy/* /Users/lady_rosario/Documenti/leidyDist
cd /Users/lady_rosario/Documenti/leidyDist/
git add .
git commit -m "new version"
git push -u origin master
cd /Users/lady_rosario/GitHub/lady
