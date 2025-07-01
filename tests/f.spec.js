import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('mobiles');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).press('Enter');
  //await page.getByRole('link', { name: 'mobiles 5g in Mobiles' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'POCO M6 Plus 5G (Ice Silver,' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Add to cart' }).click();
  await page1.waitForSelector('Remove');
  await page1.getByText('Remove').click();
  await page1.getByText('Remove').nth(2).click();
});