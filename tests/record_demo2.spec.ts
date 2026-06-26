import { test, expect, chromium } from '@playwright/test';

test ('test', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/?zx=1776770429597');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('hello');

  // ---------------------
  await context.close();
  await browser.close();
});