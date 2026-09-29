import '@testing-library/jest-dom/vitest';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

// jsdom does not implement scrolling.
window.scrollTo = vi.fn();
Element.prototype.scrollIntoView = vi.fn();
