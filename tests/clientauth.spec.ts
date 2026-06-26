import { test, expect } from '@playwright/test'

test.only('Practice locators- playwright test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    await page.pause();
    console.log(await page.title());
    await expect(page).toHaveTitle("Let's Shop");

    const userName = page.getByRole('textbox', { name: 'Email' });
    const password = page.getByRole('textbox', { name: 'Password' });
    const password1 = page.getByRole('textbox', { name: 'enter your passsword' });

    await userName.fill(process.env.CLIENT_EMAIL || '');
    await password1.fill(process.env.CLIENT_PASSWORD || '');
    await page.getByRole('button', { name: 'Login' }).click();

    //await page.getByRole('img').first().click();

   // await page.waitForLoadState('networkidle');

    //const productTitles = page.getByRole('heading', { name: 'ZARA COAT 3' });
    //await page.waitForLoadState('networkidle');  
    // //use of n/w idle is discouraged as it may cause flakiness in tests, 
    // use wait for selector instead
    await page.locator(".card-body b").first().waitFor();

    const productTitles = await page.locator('.card-body b').allTextContents();
    console.log("project titles: " + productTitles);
});
