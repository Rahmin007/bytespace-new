import { useLayoutEffect, useState } from 'react';

/**
 * Returns the current width (px) of the element behind `ref`,
 * and keeps it up to date when the element is resized.
 */
export function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const update = () => setWidth(element.clientWidth);
    update();

    // ResizeObserver is not available in some test environments.
    if (typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return width;
}
