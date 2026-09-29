import Logo from '../ui/Logo';
import NewsletterForm from './NewsletterForm';
import { Link } from 'react-router-dom';
import { FOOTER_COLUMNS, LEGAL_LINKS } from '../../data/content';
import { ROUTES } from '../../utils/routes';

/** Footer links that lead somewhere real in this build; the rest go back to the top. */
const LINK_TARGETS = {
  'Featured Courses': ROUTES.courses,
  'Featured Categories': ROUTES.categories,
  'Become a Creator': ROUTES.signUp,
};

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page pt-[70px] lg:pt-[72px]">
        <div className="grid gap-12 lg:grid-cols-[460px_1fr] lg:gap-[160px]">
          <div>
            <Logo className="h-[34px] w-auto text-ink" />
            <p className="mt-5 text-sm text-ink">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <NewsletterForm className="mt-12" />
            <p className="text-xs leading-[1.6] text-ink">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from
              our company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className="sr-only">{column.title}</h2>
                <ul className="space-y-[18px] lg:pt-[51px]">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link
                        to={LINK_TARGETS[link] ?? '#top'}
                        className="text-sm leading-5 text-ink hover:text-brand"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pb-10 pt-5 text-xs text-ink sm:flex-row sm:items-center sm:justify-between lg:mt-[134px]">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link}>
                <a href="#top" className="hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
