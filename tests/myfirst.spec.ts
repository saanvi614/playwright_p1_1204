import { test, expect } from '@playwright/test';

test('my first test',async ({page})=>{

await page.goto('https://playwright.dev/');
 await expect (page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
})