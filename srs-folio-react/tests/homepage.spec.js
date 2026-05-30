import { test, expect } from '@playwright/test';

test.describe('Homepage Tests', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/SR Sujon/);
  });

  test('should display all main sections on homepage', async ({ page }) => {
    await page.goto('/');
    
    // Check for main sections
    await expect(page.locator('#home')).toBeVisible();
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#skills')).toBeVisible();
    await expect(page.locator('#education')).toBeVisible();
    await expect(page.locator('#portfolio')).toBeVisible();
    await expect(page.locator('#experience')).toBeVisible();
    await expect(page.locator('#certificate')).toBeVisible();
    await expect(page.locator('#research')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('should show featured portfolio items (6 projects)', async ({ page }) => {
    await page.goto('/');
    
    // Wait for portfolio section
    await page.locator('#portfolio').scrollIntoViewIfNeeded();
    
    // Count project cards in featured mode (should be 6)
    const portfolioSection = page.locator('#portfolio');
    const projectCards = portfolioSection.locator('.project-card, [class*="bg-white rounded-"]').first();
    await expect(projectCards).toBeVisible();
  });

  test('should show View All buttons in featured sections', async ({ page }) => {
    await page.goto('/');
    
    // Check Portfolio View All button
    await page.locator('#portfolio').scrollIntoViewIfNeeded();
    const portfolioViewAll = page.getByRole('button', { name: /View All.*Projects/i });
    await expect(portfolioViewAll).toBeVisible();
    
    // Check Experience View All button
    await page.locator('#experience').scrollIntoViewIfNeeded();
    const experienceViewAll = page.getByRole('button', { name: /View All.*Experience/i });
    await expect(experienceViewAll).toBeVisible();
    
    // Check Certifications View All button
    await page.locator('#certificate').scrollIntoViewIfNeeded();
    const certViewAll = page.getByRole('button', { name: /View All.*Certifications/i });
    await expect(certViewAll).toBeVisible();
    
    // Check Research View All button
    await page.locator('#research').scrollIntoViewIfNeeded();
    const researchViewAll = page.getByRole('button', { name: /View All.*Publications/i });
    await expect(researchViewAll).toBeVisible();
  });
});
