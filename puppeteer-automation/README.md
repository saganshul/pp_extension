# Puppeteer Automation

A puppeteer script to save the RAW html page (inspect element) after loading and manipulating by an extension.

## Contents

### Puppeteer Scrape

Contains the script to do the following:

1. launch browser with extension loaded
2. visit a URL
3. read the RAW html once page loads
4. save it to a file in `scraped-pages`

### Sample Extension

Contains a chrome extension that modifies the first `<img>` in a webpage to a pre-defined image by changing its `src` attribute.

### index.html

Sample website that contains `<img>` element.

## Usage

1. Spin up a http server and server `index.html`
2. Go to `puppeteer-scrape/` and run `npm i` and `node index.js`
3. View the RAW html in `puppeteer-scrape/scraped-pages`
