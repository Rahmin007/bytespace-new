import { expect, test } from '@playwright/test';

const PAGES = [
  { path: '/', heading: 'Get Access to Hundreds Courses Available' },
  { path: '/signin', heading: 'Welcome Back' },
  { path: '/signup', heading: 'Welcome to ByteSpace' },
  { path: '/does-not-exist', heading: /doesn.t exist/ },
];

/** Fails the test on JavaScript errors (the web font is ignored so tests work offline). */
function trackErrors(page) {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error' && !message.text().includes('Failed to load resource')) {
      errors.push(message.text());
    }
  });
  return errors;
}

for (const { path, heading } of PAGES) {
  test(`${path} loads without errors or sideways scrolling`, async ({ page }) => {
    const errors = trackErrors(page);
    await page.goto(path);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(heading);

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, 'page should not scroll horizontally').toBeLessThanOrEqual(0);
    expect(errors).toEqual([]);
  });
}

test('every image on the landing page loads', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() =>
    document.querySelectorAll('img').forEach((img) => (img.loading = 'eager')),
  );
  await page.waitForFunction(() => [...document.images].every((img) => img.complete));
  const broken = await page.evaluate(() =>
    [...document.images].filter((img) => img.naturalWidth === 0).map((img) => img.src),
  );
  expect(broken).toEqual([]);
});

test('topic filters and category tiles update the course list', async ({ page }) => {
  await page.goto('/');
  const cards = page.locator('#courses li h3');
  await expect(cards).toHaveCount(6);

  await page.getByRole('button', { name: 'Productivity', exact: true }).click();
  await expect(cards).toHaveCount(1);
  await expect(page).toHaveURL(/topic=Productivity/);

  await page.getByRole('link', { name: 'Development courses' }).click();
  await expect(page.getByRole('button', { name: 'Web Development' })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
});

test('hero search shows matching courses', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('searchbox', { name: 'Search courses' }).fill('figma');
  await page.getByRole('button', { name: 'Search', exact: true }).first().click();
  await expect(page).toHaveURL(/q=figma#courses/);
  await expect(page.getByText(/1 result for/)).toBeVisible();
  await expect(page.locator('#courses li h3')).toHaveText(['Learn Figma from Basic']);
});

test('sign up validates and then succeeds', async ({ page }) => {
  await page.goto('/signup');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('Enter your full name.')).toBeVisible();
  await expect(page.getByLabel('Full Name')).toBeFocused();

  await page.getByLabel('Full Name').fill('Jamie Davis');
  await page.getByLabel('Email').fill('designer@example.com');
  await page.getByLabel('Password', { exact: true }).fill('bytespace1');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('status')).toContainText("You're all set, Jamie!");
});

test('sign in validates and then succeeds', async ({ page }) => {
  await page.goto('/signin');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await expect(page.getByText('Enter your email address.')).toBeVisible();

  await page.getByLabel('Email').fill('designer@example.com');
  await page.getByLabel('Password', { exact: true }).fill('secret');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await expect(page.getByText('Signed in successfully. Welcome back!')).toBeVisible();
});

test('auth pages link to each other', async ({ page }) => {
  await page.goto('/signin');
  await page.getByRole('link', { name: 'Create an account' }).click();
  await expect(page).toHaveURL('/signup');
  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page).toHaveURL('/signin');
});

test('navigation works on desktop and mobile', async ({ page, isMobile }) => {
  await page.goto('/');
  if (isMobile) await page.getByRole('button', { name: 'Open menu' }).click();
  await page.getByRole('link', { name: 'Join Us' }).first().click();
  await expect(page).toHaveURL('/signup');

  await page.getByRole('link', { name: 'ByteSpace home' }).click();
  await expect(page).toHaveURL('/');
});

test('footer newsletter validates the email', async ({ page }) => {
  await page.goto('/');
  const form = page.getByRole('form', { name: 'Newsletter' });
  await form.getByLabel('Email address').fill('nope');
  await form.getByRole('button', { name: 'Subscribe to newsletter' }).click();
  await expect(form.getByRole('alert')).toContainText('valid email');
  await form.getByLabel('Email address').fill('reader@example.com');
  await form.getByRole('button', { name: 'Subscribe to newsletter' }).click();
  await expect(form.getByText(/You are subscribed/)).toBeVisible();
});

test('keyboard users can skip to the content', async ({ page, isMobile }) => {
  test.skip(isMobile, 'keyboard test runs on desktop only');
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
});
