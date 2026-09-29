import PageShell from '../components/layout/PageShell';
import Navbar from '../components/layout/Navbar';
import Button from '../components/ui/Button';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { ROUTES } from '../utils/routes';

export default function NotFoundPage() {
  useDocumentTitle('Page not found - ByteSpace');
  return (
    <PageShell>
      <section className="bg-grid overflow-hidden" aria-labelledby="not-found-title">
        <Navbar />
        <div className="container-page flex flex-col items-center pb-24 text-center lg:min-h-[920px] lg:pb-0">
          <p
            aria-hidden="true"
            className="bg-gradient-to-b from-lime from-45% to-lime/20 bg-clip-text font-display text-[clamp(150px,31vw,440px)] font-semibold leading-none text-transparent lg:mt-[24px]"
          >
            404
          </p>
          <h1
            id="not-found-title"
            className="relative -mt-[14%] max-w-[900px] font-display text-[36px] font-semibold leading-[1.2] text-white sm:text-[56px] lg:-mt-[150px] lg:text-[72px] lg:leading-[86px]"
          >
            The page you are looking for doesn&rsquo;t exist
          </h1>
          <p className="mt-8 text-base text-surface sm:text-lg lg:mt-[39px]">
            Try to use a correct url or go back to homepage to start again
          </p>
          <Button to={ROUTES.home} className="mt-8 lg:mt-[41px]" size="sm">
            Back to Home
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
