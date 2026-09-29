import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import SkipLink from '../layout/SkipLink';
import AuthIllustration from './AuthIllustration';
import { ROUTES } from '../../utils/routes';

/**
 * Shared layout for the sign in and sign up pages:
 * blue grid background, intro text + illustration on the left, white form panel on the right.
 */
export default function AuthLayout({ title, description, children }) {
  return (
    <div className="bg-grid min-h-screen">
      <SkipLink targetId="auth-form" />
      <div className="container-page pb-12 lg:pb-[120px]">
        <header className="flex h-[88px] items-center lg:h-[102px]">
          <Link to={ROUTES.home} aria-label="ByteSpace home" className="inline-block">
            <Logo showWordmark={false} className="h-[31px] w-auto" />
          </Link>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1fr_579px] lg:gap-6">
          <section aria-label="About ByteSpace" className="lg:pt-[17px]">
            <h2 className="font-display text-xl font-semibold text-surface">{title}</h2>
            <p className="mt-4 max-w-[470px] text-base leading-[1.6] text-surface sm:text-lg">
              {description}
            </p>
            <div className="mt-[54px] hidden max-w-[552px] lg:block">
              <AuthIllustration />
            </div>
          </section>

          <main
            id="auth-form"
            className="flex min-h-[640px] flex-col rounded-card bg-white px-6 py-10 sm:px-[63px] sm:py-16 lg:mt-[18px] lg:min-h-[784px]"
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
