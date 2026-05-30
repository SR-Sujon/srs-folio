import { test, expect } from '@playwright/test';

test.describe('Routing and Navigation Tests', () => {
  test('should navigate to Portfolio page', async ({ page }) => {
    await page.goto('/');
    
    // Click View All button in portfolio section
    await page.locator('#portfolio').scrollIntoViewIfNeeded();
    await page.getByRole('button', { name: /View All.*Projects/i }).click();
    
    // Should be on portfolio page
    await expect(page).toHaveURL('/portfolio');
    await expect(page).toHaveTitle(/Portfolio - SR Sujon/);
  });

  test('should navigate to Experience page', async ({ page }) => {
    await page.goto('/');
    
    // Click View All button in experience section
    await page.locator('#experience').scrollIntoViewIfNeeded();
    await page.getByRole('button', { name: /View All.*Experience/i }).click();
    
    // Should be on experience page
    await expect(page).toHaveURL('/experience');
    await expect(page).toHaveTitle(/Experience - SR Sujon/);
  });

  test('should navigate to Certifications page', async ({ page }) => {
    await page.goto('/');
    
    // Click View All button in certifications section
    await page.locator('#certificate').scrollIntoViewIfNeeded();
    await page.getByRole('button', { name: /View All.*Certifications/i }).click();
    
    // Should be on certifications page
    await expect(page).toHaveURL('/certifications');
    await expect(page).toHaveTitle(/Certifications - SR Sujon/);
  });

  test('should navigate to Research page', async ({ page }) => {
    await page.goto('/');
    
    // Click View All button in research section
    await page.locator('#research').scrollIntoViewIfNeeded();
    await page.getByRole('button', { name: /View All.*Publications/i }).click();
    
    // Should be on research page
    await expect(page).toHaveURL('/research');
    await expect(page).toHaveTitle(/Research.*SR Sujon/);
  });

  test('should navigate back to homepage from dedicated pages', async ({ page }) => {
    // Go to portfolio page
    await page.goto('/portfolio');
    
    // Click back button
    await page.getByRole('link', { name: /back to home/i }).click();
    
    // Should be on homepage
    await expect(page).toHaveURL('/');
  });

  test('navbar should navigate to dedicated pages', async ({ page }) => {
    await page.goto('/');
    
    // Click Portfolio in navbar - use first() to handle both desktop and mobile
    await page.getByRole('navigation').getByText('Portfolio').first().click();
    await expect(page).toHaveURL('/portfolio');
    
    // Click Experience in navbar
    await page.getByRole('navigation').getByText('Experience').first().click();
    await expect(page).toHaveURL('/experience');
    
    // Click Certifications in navbar
    await page.getByRole('navigation').getByText('Certifications').first().click();
    await expect(page).toHaveURL('/certifications');
    
    // Click Research in navbar
    await page.getByRole('navigation').getByText('Research').first().click();
    await expect(page).toHaveURL('/research');
  });

  test('navbar logo should navigate to homepage', async ({ page }) => {
    await page.goto('/portfolio');
    
    // Click logo
    await page.getByRole('link', { name: 'SR Sujon' }).first().click();
    
    // Should be on homepage
    await expect(page).toHaveURL('/');
  });

  test('browser back button should work', async ({ page }) => {
    await page.goto('/');
    await page.goto('/portfolio');
    
    // Go back
    await page.goBack();
    await expect(page).toHaveURL('/');
    
    // Go forward
    await page.goForward();
    await expect(page).toHaveURL('/portfolio');
  });
});
