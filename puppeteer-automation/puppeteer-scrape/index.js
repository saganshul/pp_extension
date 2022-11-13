const fs = require('fs');
const puppeteer = require('puppeteer');

const extensionPath = '/home/shreyas/Downloads/fall-2022/web-sec/project/sample-extension'; // CHANGE ME

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
    
        await page.goto('http://localhost:8000/index.html');
    
        const data = await page.evaluate(() => document.querySelector('*').outerHTML);
    
        console.log(data);
        fs.writeFileSync('./scraped-pages/page.html', data);
    
        await browser.close();
    } catch (err) {
        console.error(err);
    }
}

run();
