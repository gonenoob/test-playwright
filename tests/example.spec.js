// @ts-check
const { test, expect } = require('@playwright/test');

test('标题为总览', async ({ page }) => {
  await page.goto('http://0.0.0.0:8080/#/index');

  // Expect a title "to contain" a substring.
  const locator = page.locator('.xbee-layout-main-title h2')

  await expect(locator).toContainText('总览')
});

test('账号管理跳转正确', async ({ page }) => {
  await page.goto('http://0.0.0.0:8080/#/index');

  // Click the get started link.
  await page.getByText('系统管理').click();
  await page.getByText('账号管理').click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/\/account\/manage/);
});
