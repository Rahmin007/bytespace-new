import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';
import { BagIcon, CloseIcon, MenuIcon } from '../ui/icons';
import { NAV_LINKS } from '../../data/content';
import { ROUTES } from '../../utils/routes';
import { cn } from '../../utils/cn';

/** True when a nav link points at the current page (and #section). */
function isActiveLink(to, location) {
  const [path, hash = ''] = to.split('#');
  return location.pathname === path && location.hash === (hash ? `#${hash}` : '');
}

/**
 * Site header shown on top of the blue sections.
 * Desktop: links in the centre, account actions on the right.
 * Mobile (< 1024px): a menu button opens a full-width panel.
 */
export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setMenuOpen(false), [location.pathname, location.hash]);

  // Allow closing the mobile menu with the Escape key.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const linkClass = (to) =>
    cn(
      'text-base text-surface transition-opacity hover:opacity-80',
      isActiveLink(to, location) && 'font-medium',
    );

  return (
    <header className="relative z-30">
      <nav aria-label="Main" className="container-page flex h-[88px] items-center lg:h-[104px]">
        <Link to={ROUTES.home} className="shrink-0 text-surface" aria-label="ByteSpace home">
          <Logo className="h-[30px] w-auto lg:h-[34px]" />
        </Link>

        <ul className="mx-auto hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className={linkClass(link.to)}
                aria-current={isActiveLink(link.to, location) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto hidden items-center gap-6 lg:ml-0 lg:flex">
          <Link to={ROUTES.signIn} className={linkClass(ROUTES.signIn)}>
            Sign In
          </Link>
          <Link to={ROUTES.signUp} className={linkClass(ROUTES.signUp)}>
            Join Us
          </Link>
          <button
            type="button"
            className="ml-1 text-surface transition-opacity hover:opacity-80"
            aria-label="Shopping cart, 0 items"
          >
            <BagIcon className="h-5 w-4" />
          </button>
        </div>

        <button
          type="button"
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-full text-surface lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-y border-brand-grid bg-brand px-5 pb-6 pt-2 shadow-float sm:px-8 lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={cn(linkClass(link.to), 'block py-3 text-lg')}
                  aria-current={isActiveLink(link.to, location) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3">
            <Link
              to={ROUTES.signIn}
              className="flex h-[46px] flex-1 items-center justify-center rounded-full border border-surface/40 text-surface"
            >
              Sign In
            </Link>
            <Link
              to={ROUTES.signUp}
              className="flex h-[46px] flex-1 items-center justify-center rounded-full bg-lime font-medium text-ink"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
