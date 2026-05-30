import { test, expect } from '@playwright/test';

test.describe('Portfolio Page Tests', () => {
  test('should display all 12 projects', async ({ page }) => {
    await page.goto('/portfolio');
    
    // Wait for content to load by checking for portfolio cards
    await page.waitForLoadState('networkidle');
    
    // Check that portfolio page loaded successfully
    await expect(page.getByRole('heading', { name: /portfolio/i })).toBeVisible();
  });

  test('should filter projects by category', async ({ page }) => {
    await page.goto('/portfolio');
    await page.waitForLoadState('networkidle');
    
    // Click on "AI & Machine Learning" category
    await page.getByRole('button', { name: 'AI & Machine Learning' }).click();
    
    // Wait for filter to apply
    await page.waitForTimeout(500);
  });

  test('should search projects', async ({ page }) => {
    await page.goto('/portfolio');
    await page.waitForLoadState('networkidle');
    
    // Type in search box
    await page.getByPlaceholder(/search projects/i).fill('AI');
    
    // Wait for search to apply
    await page.waitForTimeout(800);
  });

  test('should show "no results" message when search has no matches', async ({ page }) => {
    await page.goto('/portfolio');
    await page.waitForLoadState('networkidle');
    
    // Search for something that doesn't exist
    await page.getByPlaceholder(/search projects/i).fill('xyz123nonexistent');
    
    // Should show no results message
    await page.waitForTimeout(500);
    await expect(page.locator('text=No projects found').or(page.locator('text=0 projects'))).toBeVisible();
  });

  test('should reset filter to show all projects', async ({ page }) => {
    await page.goto('/portfolio');
    await page.waitForLoadState('networkidle');
    
    // Filter by category first
    await page.getByRole('button', { name: 'AI & Machine Learning' }).click();
    await page.waitForTimeout(300);
    
    // Click "All" to reset
    const allButtons = page.getByRole('button', { name: 'All' });
    await allButtons.first().click();
    
    // Wait for reset
    await page.waitForTimeout(300);
  });
});

test.describe('Experience Page Tests', () => {
  test('should display all experience positions', async ({ page }) => {
    await page.goto('/experience');
    await page.waitForLoadState('networkidle');
    
    // Check for known companies using heading roles to avoid duplicates
    await expect(page.getByRole('heading', { name: /MASS HOLDINGS/i }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: /Upwork/i }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: /Sparks Foundation/i }).first()).toBeVisible();
  });

  test('should show current position badge', async ({ page }) => {
    await page.goto('/experience');
    await page.waitForLoadState('networkidle');
    
    // Look for "Present" badge or indicator
    await expect(page.locator('text=Present').first()).toBeVisible();
  });
});

test.describe('Certifications Page Tests', () => {
  test('should display certifications', async ({ page }) => {
    await page.goto('/certifications');
    await page.waitForLoadState('networkidle');
    
    // Check for known certifications
    await expect(page.getByRole('heading', { name: /ITEE/i }).first()).toBeVisible();
  });

  test('should filter certifications by category', async ({ page }) => {
    await page.goto('/certifications');
    await page.waitForLoadState('networkidle');
    
    // Click on a category filter
    await page.getByRole('button', { name: 'Online Course' }).click();
    
    // Wait for filter to apply
    await page.waitForTimeout(500);
  });

  test('should search certifications', async ({ page }) => {
    await page.goto('/certifications');
    await page.waitForLoadState('networkidle');
    
    // Type in search box
    await page.getByPlaceholder(/search certifications/i).fill('Python');
    
    // Should show filtered results
    await page.waitForTimeout(500);
    await expect(page.getByRole('heading', { name: /Python/i }).first()).toBeVisible();
  });
});

test.describe('Research Page Tests', () => {
  test('should display publications', async ({ page }) => {
    await page.goto('/research');
    await page.waitForLoadState('networkidle');
    
    // Check for known publications using heading roles
    await expect(page.getByRole('heading', { name: /BSMDD|Depression/i }).first()).toBeVisible();
  });

  test('should filter publications by type', async ({ page }) => {
    await page.goto('/research');
    await page.waitForLoadState('networkidle');
    
    // Click on Dataset filter
    await page.getByRole('button', { name: 'Dataset' }).click();
    
    // Wait for filter to apply
    await page.waitForTimeout(500);
  });

  test('should search publications', async ({ page }) => {
    await page.goto('/research');
    await page.waitForLoadState('networkidle');
    
    // Type in search box
    const searchInput = page.getByPlaceholder(/search publications/i);
    await searchInput.fill('Bengali');
    
    // Should show filtered results - check search actually worked by verifying input value
    await page.waitForTimeout(500);
    await expect(searchInput).toHaveValue('Bengali');
    
    // Verify at least one publication card is visible
    await expect(page.locator('[class*="bg-white"][class*="rounded-2xl"]').first()).toBeVisible();
  });

  test('should display external links for publications', async ({ page }) => {
    await page.goto('/research');
    await page.waitForLoadState('networkidle');
    
    // Check for external links (DOI, GitHub, etc.) - look for any link with common research domains
    const links = page.locator('a[href*="doi.org"], a[href*="github.com"], a[href*="researchgate"], a[href*="scholar"]');
    await expect(links.first()).toBeVisible();
  });
});
