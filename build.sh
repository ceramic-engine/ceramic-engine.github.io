#!/bin/bash
cd "$(dirname "$0")"

# Remove gitignore files in content
cd content
find . -name '.gitignore' -exec rm {} +
cd ..

# Get latest generated samples
if [ -d _samples ]; then
    rm -rf _samples
fi
git clone --branch gh-pages https://github.com/ceramic-engine/ceramic-samples.git _samples


# Run eleventy
npx @11ty/eleventy
