const puppeteer = require('puppeteer')

async function teste(parametroPesquisa){
    
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    
    await page.goto('https://www.google.com.br');
    
    // Type into search box.
    await page.type('[name="q"]', parametroPesquisa);
    await page.waitForSelector('.FPdoLc.VlcLAe [name="btnK"]');
    await page.click('.FPdoLc.VlcLAe [name="btnK"]');
    // Wait for suggest overlay to appear and click "show all results".
    
    
    // Wait for the results page to load and display the results.
    const resultsSelector = '#search .g .r a h3';
    await page.waitForSelector(resultsSelector);
    
    // Extract the results from the page.
    const links = await page.evaluate(resultsSelector => {
        const anchors = Array.from(document.querySelectorAll(resultsSelector));
        return anchors.map(anchor => {
            const title = anchor.textContent.trim();
            return `${title}`;
        });
    }, resultsSelector);
    console.log(links.join('\n'));
    
    await browser.close();
}

teste();