import { act, screen } from '@testing-library/react';
import SignUpPage from './SignUpPage';
import { renderWithRouter } from '../test/renderWithRouter';

describe('SignUpPage', () => {
  it('matches the design copy', () => {
    renderWithRouter(<SignUpPage />);
    expect(screen.getByText('Create an Account')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome to ByteSpace');
    expect(screen.getByRole('link', { name: 'Login' })).toHaveAttribute('href', '/signin');
    expect(document.title).toBe('Create an account - ByteSpace');
  });

  it('shows every error and focuses the first invalid field on empty submit', async () => {
    const { user } = renderWithRouter(<SignUpPage />);
    await user.click(screen.getByRole('button', { name: 'Continue' }));

    expect(screen.getByText('Enter your full name.')).toBeInTheDocument();
    expect(screen.getByText('Enter your email address.')).toBeInTheDocument();
    expect(screen.getByText('Create a password.')).toBeInTheDocument();
    expect(screen.getByLabelText('Full Name')).toHaveFocus();
    expect(screen.getByLabelText('Full Name')).toHaveAttribute('aria-invalid', 'true');
  });

  it('validates a field when the user leaves it', async () => {
    const { user } = renderWithRouter(<SignUpPage />);
    await user.type(screen.getByLabelText('Email'), 'not-an-email');
    await user.tab();
    expect(screen.getByText(/Enter a valid email address/)).toBeInTheDocument();
  });

  it('clears an error as soon as the value becomes valid', async () => {
    const { user } = renderWithRouter(<SignUpPage />);
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await user.type(screen.getByLabelText('Full Name'), 'Jamie Davis');
    expect(screen.queryByText('Enter your full name.')).not.toBeInTheDocument();
  });

  it('can show and hide the password', async () => {
    const { user } = renderWithRouter(<SignUpPage />);
    const password = screen.getByLabelText('Password');
    expect(password).toHaveAttribute('type', 'password');
    await user.click(screen.getByRole('button', { name: 'Show password' }));
    expect(password).toHaveAttribute('type', 'text');
    await user.click(screen.getByRole('button', { name: 'Hide password' }));
    expect(password).toHaveAttribute('type', 'password');
  });

  it('creates the account when everything is valid', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const { user } = renderWithRouter(<SignUpPage />, {
      userOptions: { advanceTimers: vi.advanceTimersByTime },
    });
    await user.type(screen.getByLabelText('Full Name'), 'Jamie Davis');
    await user.type(screen.getByLabelText('Email'), 'designer@example.com');
    await user.type(screen.getByLabelText('Password'), 'bytespace1');
    await user.click(screen.getByRole('button', { name: 'Continue' }));

    expect(screen.getByRole('button', { name: 'Creating account…' })).toBeDisabled();
    await act(() => vi.advanceTimersByTimeAsync(800));
    expect(screen.getByRole('status')).toHaveTextContent("You're all set, Jamie!");
    expect(screen.getByRole('link', { name: 'Start exploring courses' })).toHaveAttribute(
      'href',
      '/',
    );
  });
});
