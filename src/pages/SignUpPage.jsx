import { Link } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import TextField from '../components/auth/TextField';
import PasswordField from '../components/auth/PasswordField';
import FormStatus from '../components/auth/FormStatus';
import Button from '../components/ui/Button';
import { useForm } from '../hooks/useForm';
import { useFakeSubmit } from '../hooks/useFakeSubmit';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { validateEmail, validateFullName, validateNewPassword } from '../utils/validation';
import { ROUTES } from '../utils/routes';

const VALIDATORS = {
  fullName: validateFullName,
  email: validateEmail,
  password: validateNewPassword,
};

export default function SignUpPage() {
  useDocumentTitle('Create an account - ByteSpace');
  const { values, handleSubmit, fieldProps } = useForm(
    { fullName: '', email: '', password: '' },
    VALIDATORS,
  );
  const { status, run } = useFakeSubmit();
  const firstName = values.fullName.trim().split(/\s+/)[0];

  return (
    <AuthLayout
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <p className="text-lg text-brand">Create an Account</p>
      <h1 className="mt-1 font-display text-[36px] font-semibold leading-[1.2] text-ink sm:text-[44px]">
        Welcome to <br className="hidden sm:block" />
        ByteSpace
      </h1>

      {status === 'success' ? (
        <div className="mt-10">
          <FormStatus message={`You're all set, ${firstName}! Your ByteSpace account is ready.`} />
          <Button to={ROUTES.home} className="mt-6">
            Start exploring courses
          </Button>
        </div>
      ) : (
        <form noValidate onSubmit={handleSubmit(() => run())} className="mt-10 lg:mt-[42px]">
          <div className="space-y-6">
            <TextField
              label="Full Name"
              autoComplete="name"
              placeholder="Jamie Davis"
              {...fieldProps('fullName')}
            />
            <TextField
              label="Email"
              type="email"
              autoComplete="email"
              placeholder="designer@example.com"
              {...fieldProps('email')}
            />
            <PasswordField
              autoComplete="new-password"
              placeholder="********"
              {...fieldProps('password')}
            />
          </div>
          <div className="mt-6 flex justify-end">
            <Button type="submit" disabled={status === 'loading'} aria-busy={status === 'loading'}>
              {status === 'loading' ? 'Creating account…' : 'Continue'}
            </Button>
          </div>
        </form>
      )}

      <p className="mt-auto pt-10 text-center text-base text-ink-body">
        Already have an account?{' '}
        <Link to={ROUTES.signIn} className="text-brand hover:underline">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}
