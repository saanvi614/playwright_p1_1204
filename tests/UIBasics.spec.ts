import { test, expect } from "@playwright/test";

test('Browser Context playwright test', async ({ browser }) => {

    //chrome plugins/coookies
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://playwright.dev/');
    console.log(await page.title());

    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');

});

test('Google playwright test', async ({ page }) => {
    await page.goto('https://google.com/');
    console.log(await page.title());

    await expect(page).toHaveTitle('Google');
});

test('Page playwright test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());

    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    await page.pause();

    //Define locators

    const userName = page.getByRole('textbox', { name: 'Username:' });
    const password = page.getByRole('textbox', { name: 'Password:' });
    const signInBtn = page.locator('#signInBtn');

    //     //await page.locator('#username').fill('rahulshettyacademy2');
    //     await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy11221');
    //    // page.getByRole('textbox', { name: 'Username:' }).fill('gfg');
    //   l̥  await page.getByRole('textbox', { name: 'Password:' }).fill('paswrrod');
    // //    await page.locator('#password').fill('pass1234');

    await userName.fill(process.env.RAHUL_USERNAME || '');
    await password.fill(process.env.RAHUL_PASSWORD || '');
    await signInBtn.click();

    //     const errorMessage = await page.locator("[style*='block']").textContent();
    //     console.log(errorMessage);
    //    await expect(errorMessage).toContain('Incorrect');

    //same thing in another way
    console.log(await page.locator("[style*='block']").textContent());
    //await expect(page.locator("[style*='block']").textContent()).toContain('Incorrect');
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await userName.clear();
    await userName.fill(process.env.RAHUL_USERNAME || '');
    await password.fill(process.env.RAHUL_PASSWORD || '');
    await signInBtn.click();

    // console.log(await page.locator("[class='card-body']").first().textContent());
    // console.log(await page.locator("[class='card-body']").last().textContent());
    // console.log(await page.locator("[class='card-body']").nth(1).textContent());

    const allProducts = await page.locator("[class='card-body']").allTextContents();
    console.log(allProducts);
});

test.only('UI Controls- playwright test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const userName = page.getByRole('textbox', { name: 'Username:' });

    //dropdown
    const dropdown = page.locator('select.form-control');
    await dropdown.selectOption('consult');
    await expect(dropdown).toHaveValue('consult');
    console.log((await dropdown.allTextContents()));

    //--------------------------------------------
    // Define radio button locator
    const radioButtons = page.locator("input[type='radio']");
    // Click on the second radio button
    await radioButtons.nth(1).click();
    await page.locator('#okayBtn').click(); // Click the "Okay" button in the alert
    // Verify the selection
    await expect(radioButtons.nth(1)).toBeChecked();
    console.log("Selected radio button value True/False: " + await radioButtons.nth(1).isChecked());
    console.log("Selected radio button value: " + await radioButtons.nth(1).getAttribute('value'));
    //--------------------------------------------
    // Define checkbox locator
    const checkbox = page.locator('#terms');
    await page.pause();
    // Check the checkbox
      //check() method will check the checkbox if it's not already checked,
    //  and do nothing if it is already checked.
    await checkbox.check(); 
    await expect(checkbox).toBeChecked(); // Alternative assertion
    console.log("Now Checkbox is checked or not: " + await checkbox.isChecked());

    // Uncheck the checkbox
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked(); // Alternative assertion
    expect(await checkbox.isChecked()).toBeFalsy(); // Alternative assertion
    console.log("Now Checkbox is checked or not: " + await checkbox.isChecked());

    console.log('title is:- '+ await page.title());

    await page.pause();
   // const documentLink=page.locator('a:has-text("Document")');
    //await documentLink.click();
});