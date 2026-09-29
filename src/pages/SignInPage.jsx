import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import TextField from '../components/auth/TextField';
import PasswordField from '../components/auth/PasswordField';
import FormStatus from '../components/auth/FormStatus';
import Button from '../components/ui/Button';
import { FacebookIcon, GoogleIcon } from '../components/ui/icons';
import { useForm } from '../hooks/useForm';
import { useFakeSubmit } from '../hooks/useFakeSubmit';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { validateEmail, validateExistingPassword } from '../utils/validation';
import { ROUTES } from '../utils/routes';

const VALIDATORS = { email: validateEmail, password: validateExistingPassword };

const SOCIAL_PROVIDERS = [
  { name: 'Facebook', Icon: FacebookIcon },
  { name: 'Google', Icon: GoogleIcon },
];

export default function SignInPage() {
  useDocumentTitle('Sign in - ByteSpace');
  const { handleSubmit, fieldProps } = useForm({ email: '', password: '' }, VALIDATORS);
  const { status, run } = useFakeSubmit();
  const [notice, setNotice] = useState('');

  return (
    <AuthLayout
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <p className="text-lg text-brand">Sign In</p>
      <h1 className="mt-1 font-display text-[36px] font-semibold leading-[1.2] text-ink sm:text-[44px]">
        Welcome Back
      </h1>

      {status === 'success' ? (
        <div className="mt-10">
          <FormStatus message="Signed in successfully. Welcome back!" />
          <Button to={ROUTES.home} className="mt-6">
            Go to homepage
          </Button>
        </div>
      ) : (
        <>
          <form noValidate onSubmit={handleSubmit(() => run())} className="mt-10 lg:mt-[37px]">
            <div className="space-y-6">
              <TextField
                label="Email"
                type="email"
                autoComplete="email"
                placeholder="designer@example.com"
                {...fieldProps('email')}
              />
              <PasswordField
                autoComplete="current-password"
                placeholder="********"
                {...fieldProps('password')}
              />
            </div>
            <div className="mt-6 flex justify-end">
              <Button
                type="submit"
                disabled={status === 'loading'}
                aria-busy={status === 'loading'}
              >
                {status === 'loading' ? 'Signing in…' : 'Sign In'}
              </Button>
            </div>
          </form>

          <div className="mt-10 flex items-center gap-4 lg:mt-[55px]" aria-hidden="true">
            <span className="h-px flex-1 bg-line" />
            <span className="text-base text-ink-muted">or</span>
            <span className="h-px flex-1 bg-line" />
          </div>

          <div className="mt-8 flex justify-center gap-[14px] lg:mt-[44px]">
            {SOCIAL_PROVIDERS.map(({ name, Icon }) => (
              <button
                key={name}
                type="button"
                aria-label={`Sign in with ${name}`}
                onClick={() =>
                  setNotice(`${name} sign-in is coming soon. Please use your email for now.`)
                }
                className="flex h-[74px] w-[74px] items-center justify-center rounded-panel border border-[#D1D1D1] bg-white text-black transition-colors hover:border-ink"
              >
                <Icon className="h-[33px] w-[33px]" />
              </button>
            ))}
          </div>
          <FormStatus message={notice} tone="info" className="mt-4 text-center" />
        </>
      )}

      <p className="mt-auto pt-10 text-center text-base text-ink-body">
        New user?{' '}
        <Link to={ROUTES.signUp} className="text-brand hover:underline">
          Create an account
        </Link>
      </p>
    </AuthLayout>
  );
}
