// utils/dropdown.js

export async function selectDropdownByLabel(page, selector, label) {
  await page.selectOption(selector, { label });
}  

