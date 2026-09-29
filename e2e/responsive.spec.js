import { expect, test } from '@playwright/test';

const WIDTHS = [320, 375, 414, 768, 1024, 1280, 1440, 1920];
const PATHS = ['/', '/signin', '/signup', '/404'];

test.describe('responsive layout', () => {
  test.skip(({ isMobile }) => isMobile, 'widths are set explicitly');

  for (const width of WIDTHS) {
    test(`no horizontal scrolling at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      for (const path of PATHS) {
        await page.goto(path);
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
        );
        expect(overflow, `${path} at ${width}px`).toBeLessThanOrEqual(0);
      }
    });
  }

  test('desktop nav is visible at 1440px and replaced by a menu button on mobile', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeHidden();
    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeVisible();
  });
});
