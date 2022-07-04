#! /bin/sh
set -ex
mkdir temp_web
npm run deploy:build
cd temp_web
git clone --depth 1 -b gh-pages --single-branch https://github.com/ElemeFE/urpt.git && cd urpt

# build sub folder
SUB_FOLDER='2.15'
mkdir -p $SUB_FOLDER
rm -rf *.js *.css *.map static
rm -rf $SUB_FOLDER/**
cp -rf ../../demos/urpt-ui/** .
cp -rf ../../demos/urpt-ui/** $SUB_FOLDER/
cd ../..

# deploy domestic site
faas deploy daily -P urpt
rm -rf temp_web
