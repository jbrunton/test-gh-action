#!/bin/bash

set -e

if [ -z "$1" ]; then
  echo "Tag name required"
  exit 1
fi

git tag -d $1
git push origin :$1
git tag $1
git push origin $1
