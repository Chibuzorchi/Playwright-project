const {test, expect} = require('@playwright/test')
const { log } = require('console')

test('Home page', async({page}) => {

    await page.goto('https://demoblaze.com/')

    let pageTitle = page.title()
    console.log('The tile of the page is', pageTitle);

    await expect(page).toHaveTitle('STORE')


    let pageUrl = page.url();
    console.log('My page url is:', pageUrl);
    await expect(page).toHaveURL('https://demoblaze.com/')

    await page.close()

})