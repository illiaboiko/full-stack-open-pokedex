#!/bin/bash

echo "Build script starts"

echo "installing packages"
npm ci

echo "building front-end"
npm run build