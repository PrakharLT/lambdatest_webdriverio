const { expect } = require('@wdio/globals')


describe('browsing parabank', () => {
    it('should click on services',async () => {
        await browser.url('https://parabank.parasoft.com/');

        // Perform interactions
        
        const element = $('#headerPanel > ul.leftmenu > li:nth-child(3) > a');
        await element.click();

        const element2 = $('#rightPanel > table:nth-child(6) > tbody > tr:nth-child(1) > td:nth-child(2) > a')
        
        await element2.click();
      
        await browser.execute_script("lambdatest-status = passed")
      
        // // Wait for results to load
        // await browser.waitUntil(async () => {
        //   const results = await browser.$$('.searchResult');
        //   return results.length > 0;
        // }, { timeout: 5000, timeoutMsg: 'Results did not load in time' });
      
        // // Get and print search results
        // const searchResults = await browser.$$('.searchResult');
        // for (const result of searchResults) {
        //   const title = await result.getText();
        //   console.log('Search result:', title);
        // }
      
        // // Close the browser
        // await browser.deleteSession();
    })
})

