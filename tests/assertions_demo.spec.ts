import { test, expect } from '@playwright/test';

test('assertions demo', async ({ page }) => {

    await page.goto('https://playwright.dev/');
    await page.pause();
    //Assertions
    //Check if element is present or not
    await expect(page.getByRole('link', { name: 'Docs' })).toHaveCount(1);

    //Check if element is visible or not
    await expect.soft(page.getByRole('link', { name: 'Docs' })).toBeVisible();

    //Check is element is hidden or not
    //await expect(page.getByRole('link', { name: 'Docs' })).toBeHidden();

    //check if element is clickable or not
    // await expect(page.getByRole('link', { name: 'Docs' })).toBeClickable();
    await page.getByRole('link', { name: 'Docs' }).click();

    //if (await page.$(getByRole('link', { name: 'VS Code' }))) {
    //  await page.getByRole('link', { name: 'Docs' }).click();
    //}

    //await page.getByRole('link', { name: 'VS Code', exact: true }).click();
    //await page.getByRole('heading', { name: 'VS Code' }).click();
    // await page.getByRole('heading', { name: 'VS Code' }).click();

})