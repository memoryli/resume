#!/bin/sh

cd ./dist/prod
rm -r-f ../prod.war
zip -r ../prod.war ./*
echo "完成压缩"
sleep 3
