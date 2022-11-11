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

  const navbarLogin = page.getByRole("link", { name: "Login" });

  await navbarLogin.click();

  await page.getByLabel("email").fill("ade@gmail.com");
  await page.getByLabel("password").fill("ABC123!ab");

  await page.locator("button", { type: /submit/i }).click();
  await expect(page.locator(".login_message")).toHaveText("You are logged in!");
  //navigate to main page

  const navbarMain = page.getByRole("link", { name: "Main Page Wardrobe" });

  // Click the logging link
  await navbarMain.click();
});
