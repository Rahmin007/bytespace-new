import { act, screen } from '@testing-library/react';
import SignInPage from './SignInPage';
import { renderWithRouter } from '../test/renderWithRouter';

describe('SignInPage', () => {
  it('matches the design copy', () => {
    renderWithRouter(<SignInPage />);
    expect(screen.getByRole('heading', { level: 1, name: 'Welcome Back' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Create an account' })).toHaveAttribute(
      'href',
      '/signup',
    );
  });

  it('requires an email and password', async () => {
    const { user } = renderWithRouter(<SignInPage />);
    await user.click(screen.getByRole('button', { name: 'Sign In' }));
    expect(screen.getByText('Enter your email address.')).toBeInTheDocument();
    expect(screen.getByText('Enter your password.')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toHaveFocus();
  });

  it('explains that social sign-in is not available yet', async () => {
    const { user } = renderWithRouter(<SignInPage />);
    await user.click(screen.getByRole('button', { name: 'Sign in with Google' }));
    expect(screen.getByText(/Google sign-in is coming soon/)).toBeInTheDocument();
  });

  it('signs the user in with valid details', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const { user } = renderWithRouter(<SignInPage />, {
      userOptions: { advanceTimers: vi.advanceTimersByTime },
    });
    await user.type(screen.getByLabelText('Email'), 'designer@example.com');
    await user.type(screen.getByLabelText('Password'), 'anything');
    await user.click(screen.getByRole('button', { name: 'Sign In' }));
    await act(() => vi.advanceTimersByTimeAsync(800));
    expect(screen.getByText('Signed in successfully. Welcome back!')).toBeInTheDocument();
  });
});
