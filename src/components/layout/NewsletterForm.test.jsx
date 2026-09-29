import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsletterForm from './NewsletterForm';

describe('NewsletterForm', () => {
  it('rejects an invalid email', async () => {
    const user = userEvent.setup();
    render(<NewsletterForm />);
    await user.type(screen.getByLabelText('Email address'), 'hello');
    await user.click(screen.getByRole('button', { name: 'Subscribe to newsletter' }));
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/);
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'true');
  });

  it('confirms the subscription and clears the field', async () => {
    const user = userEvent.setup();
    render(<NewsletterForm />);
    const input = screen.getByLabelText('Email address');
    await user.type(input, 'reader@example.com');
    await user.click(screen.getByRole('button', { name: 'Subscribe to newsletter' }));
    expect(screen.getByText(/You are subscribed/)).toBeInTheDocument();
    expect(input).toHaveValue('');
  });
});
