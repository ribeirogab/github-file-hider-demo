import { expect, test } from "@playwright/test";

test("retries a declined charge before failing", async ({ page }) => {
  await page.goto("/checkout?scenario=flaky-gateway");
  await page.getByRole("button", { name: "Pay now" }).click();

  await expect(page.getByText("Processing payment")).toBeVisible();
  await expect(page.getByText("Order confirmed")).toBeVisible({
    timeout: 10_000,
  });
});
