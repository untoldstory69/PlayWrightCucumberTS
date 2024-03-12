import {Given, Then, When} from "@cucumber/cucumber"
import {chromium, Page, Browser, expect} from "@playwright/test"
import { pageFixture } from "../../../hooks/pageFixture";


Given('User navigate to the test application', async function () {
  
    await pageFixture.page.goto("https://bookcart.azurewebsites.net/")
  
});

Given('User click in the login link', async function () {

  await pageFixture.page.getByRole('button', { name: 'Login' }).click();
  
});


Given('User enter the username as {string}', async function (username) {

  await pageFixture.page.getByPlaceholder('Username').fill(username);

});


Given('User enter the password as {string}', async function (password) {

  await pageFixture.page.getByPlaceholder('Password').fill(password);
  
});



When('User click Login Button', async function () {

  await pageFixture.page.locator('mat-card-actions').getByRole('button', { name: 'Login' }).click();

});

Then('login should be success', async function () {

  await pageFixture.page.getByText('account_circlearrow_drop_down').click();
  await expect(pageFixture.page.getByRole('menuitem', { name: 'Logout' })).toBeVisible();
  
});

Then('login should be NOT be success', async () => {
  await expect(pageFixture.page.getByText('Username or Password is incorrect')).toBeVisible();
})

