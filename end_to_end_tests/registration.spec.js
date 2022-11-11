const { test, expect } = require("@playwright/test");
test("display a signup page for a not logged in user", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("React App");

  // check url
  //do sign up

  await page.getByLabel("username").fill("a name");
  await page.getByLabel("email").fill("ade@gmail.com");
  await page.getByLabel("password").fill("ABC123!ab");

  await page.locator("button", { type: /submit/i }).click();
  //checkin created

  await expect(page.locator(".sign_message")).toHaveText("Created");

  // loging created
  //navigate to main page
});
