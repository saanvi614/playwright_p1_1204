import { test, expect } from '@playwright/test';

test('Login demo test', async ({ page }) => {

    await page.goto('https://demo.applitools.com/');

    await page.pause();
    await page.locator('[placeholder="Enter your username"]').fill('Raghav');
    await page.locator('[placeholder="Enter your password"]').fill('1234');
    await page.locator('text=Sign in').click();
    await page.locator('text=ACME').isVisible();

})

test('Login demo test 2', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.pause();
    await page.locator('[placeholder="Username"]').fill('Admin')
    await page.locator('[placeholder="Password"]').fill('admin123')
    await page.locator('button:has-text("Login")').click()
    //await page.locator('p:has-text("Paul Collings")').click()
    //await page.locator('text=Logout').click()
    await page.close();


})

test.only('Login demo test 3', async ({ page }) => {

    await page.pause();
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

})


