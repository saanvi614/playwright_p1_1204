import {test,expect} from '@playwright/test';

test('Single file upload',async({page}) => {
await page.pause();

await page.goto('https://xqa.io/practice/file-upload#google_vignette');

const filePath = 'F:/$wati/2026/mcpagent/playwright_p1_1204/filesToUpload/ABC.txt';

await page.locator('input[type="file"]').setInputFiles(filePath);

//await page.locator('.lucide lucide-upload w-8 h-8 text-gray-500').setInputFiles(filePath);

await expect(page.locator('input[type="file"]')).toHaveValue(/ABC.txt/);

//deselect files
await page.locator('input[type="file"]').setInputFiles([]);

await expect(page.locator('input[type="file"]')).toHaveValue('');
await expect(page.locator('input[type="file"]')).toHaveCount(0);

await page.waitForTimeout(5000);
});