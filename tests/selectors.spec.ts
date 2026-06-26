import { test, expect } from '@playwright/test';

test('test selectors', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.pause();
    await page.click('id=user-name');
    await page.locator('id=user-name').fill('standard_user');
    //await page.locator('[id="user-name"]').fill('swati');
    //using xpath selector
    //await page.locator('input[@id="password"]').fill('standard_user');
    await page.locator('xpath=//input[@id="password"]').fill('secret_sauce');

    //using css selector()
    // await page.locator('id#login-button').click();
    //await page.locator('text = Login').click();  //worked
    await page.locator('input:has-text("Login")').click(); //worked

})
