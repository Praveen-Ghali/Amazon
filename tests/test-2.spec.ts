import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('laptops');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).press('Enter');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).press('Enter');
  await page.getByRole('link', { name: 'laptop in Laptops' }).click();
  await page.getByTitle('4★ & above').locator('div').nth(1).click();
  await page.getByTitle('Core i7').locator('div').nth(1).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'DELL 15 Intel Core i7 13th' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Add to cart' }).click();
});