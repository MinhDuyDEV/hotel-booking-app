import { test, expect } from "@playwright/test";

const UI_URL = "http://localhost:5173";

test("should allow the user to sign in", async ({ page }) => {
  await page.goto(UI_URL);

  // get the sign in button and click it
  await page.getByRole("link", { name: "Sign In" }).click();

  // check that the sign in page is visible
  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

  // fill in the email and password fields
  await page.locator("[name=email]").fill("1@1.com");
  await page.locator("[name=password]").fill("password");

  // click the login button
  await page.getByRole("button", { name: "Login" }).click();

  // check that the user is redirected to the home page
  await expect(page.getByText("Sign in successful")).toBeVisible();

  // check that the user is signed in
  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign out" })).toBeVisible();
});

test("should allow the user to register", async ({ page }) => {
  const randomNumber = Math.floor(Math.random() * 1000000);
  await page.goto(UI_URL);

  // get the sign in button and click it
  await page.getByRole("link", { name: "Sign In" }).click();

  // check link to create an account is visible and click it
  await page.getByRole("link", { name: "Create an account here" }).click();

  // check that the create account page is visible
  await expect(
    page.getByRole("heading", { name: "Create an Account" })
  ).toBeVisible();

  // fill in the registration form
  await page.locator("[name=firstName]").fill("test_firstName");
  await page.locator("[name=lastName]").fill("test_lastName");
  await page
    .locator("[name=email]")
    .fill(`test_register${randomNumber}@test.com`);
  await page.locator("[name=password]").fill("password");
  await page.locator("[name=confirmPassword]").fill("password");

  // click the register button
  await page.getByRole("button", { name: "Create Account" }).click();

  // check that the user is redirected to the home page
  await expect(page.getByText("Registration successful")).toBeVisible();

  // check that the user is signed in
  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign out" })).toBeVisible();
});
