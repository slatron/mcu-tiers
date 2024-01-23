#!/usr/bin/env sh

# Abort on errors
set -e

# Remove existing app directory
rm -rf dist

# Build new app directory
npm run build
cd dist

# Init new git repository and commit to gh-pages branch
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:slatron/mcu-tiers.git main:gh-pages