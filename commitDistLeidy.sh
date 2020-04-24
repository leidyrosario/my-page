#!/usr/bin/env bash
rm -fR /Users/lady_rosario/Documents/leidyDist/leidyrosario.github.io/*
cp -R dist/leidy/* /Users/lady_rosario/Documents/leidyDist/leidyrosario.github.io
cd /Users/lady_rosario/Documents/leidyDist/leidyrosario.github.io
git add .
git commit -m "new version"
git push -u origin master
cd /Users/lady_rosario/GitHub/lady
