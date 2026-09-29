import SkipLink from './SkipLink';
import Footer from './Footer';

/** Wraps a full page: skip link, page content (with #main landmark) and footer. */
export default function PageShell({ header, children }) {
  return (
    <div id="top">
      <SkipLink />
      {header}
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
}
