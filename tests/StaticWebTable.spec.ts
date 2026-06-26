import {test,expect} from '@playwright/test';

test('Web table',async({page})=>{

await page.goto('https://letcode.in/table');

console.log("Page title: " + await page.title());

const table=page.locator('#simpletable');

const headers=await table.locator('thead').allTextContents();
console.log("Headers in single string: " + headers);
console.log("Headers count: " + headers.length);

//count headers/column headers
const headers1=await table.locator('th').allTextContents();
console.log("Headers ,comma separated: " + headers1);
console.log("Headers count: " + headers1.length);

const rows=table.locator('tbody tr');
const rowCount=await rows.count();
console.log("Row count: " + rowCount);

const columns=rows.nth(0).locator('td');
const columnCount=await columns.count();
console.log("Column count: " + columnCount);

const nameMatch=rows
          .filter({
           has:page.locator('td'),
           hasText:'Raj'});

await nameMatch.locator('input').check();
await page.pause();
});