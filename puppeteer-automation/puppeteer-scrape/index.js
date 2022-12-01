// node index.js

const fs = require('fs');
const puppeteer = require('puppeteer');

const extensionPath = '/home/shreyas/Downloads/pp_extension/puppeteer-automation/sample-extension'; // CHANGE ME

async function run() {
    try {
        const browser = await puppeteer.launch({
            headless: false, // extension are allowed only in the head-full mode
            args: [
                `--disable-extensions-except=${extensionPath}`,
                `--load-extension=${extensionPath}`
            ]
        });
    
        const page = await browser.newPage();
    
        // visit index.html
        await page.goto('http://localhost:8000/index.html');
        let data = await page.evaluate(() => document.querySelector('*').outerHTML);
        saveContents(data, page.url());

        // get script page
        const scriptURL = await page.$eval("#injected_me", element => element.getAttribute("src"));

        // visit script page
        await page.goto(scriptURL);
        data = await page.evaluate(() => document.querySelector('*').outerHTML);
        saveContents(data, page.url());
    
        await browser.close();
    } catch (err) {
        console.error(err);
    }
}

// saveContents saves the data based on page extension
function saveContents(data, pageURL) {
    const extension = getURLExtension(pageURL);

    if(extension == 'js') {
        fs.writeFileSync('./scraped-pages/page.js', data);
    } else {
        fs.writeFileSync('./scraped-pages/page.html', data);
    }

    return;
}

// getURLExtension returns the page extension based on URL
function getURLExtension(url) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
}

run();
