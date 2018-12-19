const puppeteer = require('puppeteer');

async function teste(parametroPesquisa) {
    
    const browser = await puppeteer.launch({args: ['--no-sandbox','--disable-setuid-sandbox']});
    const page = await browser.newPage();
    page.setViewport({ width: 1920, height: 1080 });
    page.setDefaultNavigationTimeout(60000);
    await page.setCacheEnabled(false);
    
    await page.goto('https://www.google.com.br');
    
    // Type into search box.
    await page.type('[name="q"]', parametroPesquisa);
    await page.waitForSelector('.FPdoLc.VlcLAe [name="btnK"]');
    await page.click('.FPdoLc.VlcLAe [name="btnK"]');
    // Wait for suggest overlay to appear and click "show all results".
    

    const naotemnada = await page.waitForSelector('#topstuff');
    const vazio = await page.evaluate(naotemnada => naotemnada.innerHTML, naotemnada);
    if (!vazio) {
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
    //console.log(links.join('\n'));
    return links;
    await browser.close();
    } else {
        return ["NAO ENCONTRADO"];
        await browser.close();
    }
    // Wait for the results page to load and display the results.
    
}
module.exports=teste;