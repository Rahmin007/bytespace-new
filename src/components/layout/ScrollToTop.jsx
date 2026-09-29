import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router does not scroll by itself. This component:
 * - scrolls to the element named in the hash (e.g. /#courses) whenever a link uses one
 * - scrolls to the top when moving to a different page
 * - does nothing for query-only changes (like picking a topic filter)
 */
export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const pathChanged = previousPath.current !== pathname;
    previousPath.current = pathname;

    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView?.({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    if (pathChanged) window.scrollTo(0, 0);
  }, [pathname, hash, key]);

  return null;
}
