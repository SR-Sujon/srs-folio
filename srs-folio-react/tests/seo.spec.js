import { test, expect } from '@playwright/test';

test.describe('SEO Meta Tags Tests', () => {
  test('homepage should have correct meta tags', async ({ page }) => {
    await page.goto('/');
    
    // Check page title
    await expect(page).toHaveTitle(/SR Sujon.*Full Stack Developer/);
    
    // Check meta description
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy();
    expect(description.length).toBeGreaterThan(50);
    
    // Check Open Graph tags
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toContain('SR Sujon');
    
    const ogDescription = await page.locator('meta[property="og:description"]').getAttribute('content');
    expect(ogDescription).toBeTruthy();
  });

  test('portfolio page should have unique meta tags', async ({ page }) => {
    await page.goto('/portfolio');
    
    // Check page title is different from homepage
    await expect(page).toHaveTitle(/Portfolio - SR Sujon/);
    
    // Check meta description
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toContain('portfolio');
  });

  test('experience page should have unique meta tags', async ({ page }) => {
    await page.goto('/experience');
    
    await expect(page).toHaveTitle(/Experience - SR Sujon/);
    
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toContain('experience');
  });

  test('certifications page should have unique meta tags', async ({ page }) => {
    await page.goto('/certifications');
    
    await expect(page).toHaveTitle(/Certifications - SR Sujon/);
    
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toContain('certification');
  });

  test('research page should have unique meta tags', async ({ page }) => {
    await page.goto('/research');
    
    await expect(page).toHaveTitle(/Research.*SR Sujon/);
    
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toContain('research');
  });

  test('all pages should have Open Graph image', async ({ page }) => {
    const pages = ['/', '/portfolio', '/experience', '/certifications', '/research'];
    
    for (const pagePath of pages) {
      await page.goto(pagePath);
      await page.waitForLoadState('networkidle');
      
      // Check for og:image meta tag
      const ogImage = await page.locator('meta[property="og:image"]').first();
      await expect(ogImage).toBeAttached();
      
      const ogImageContent = await ogImage.getAttribute('content');
      expect(ogImageContent).toBeTruthy();
      if (ogImageContent) {
        expect(ogImageContent.length).toBeGreaterThan(0);
      }
    }
  });
});
