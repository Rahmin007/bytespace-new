import { useState } from 'react';
import Button from '../ui/Button';
import { validateEmail } from '../../utils/validation';
import { cn } from '../../utils/cn';

/** Footer newsletter sign-up with inline validation. No data leaves the browser. */
export default function NewsletterForm({ className }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = validateEmail(email);
    setError(message);
    if (!message) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit} className={className} aria-label="Newsletter">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (error) setError('');
            if (subscribed) setSubscribed(false);
          }}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'newsletter-error' : undefined}
          className={cn(
            'h-[52px] w-full rounded-full border bg-white px-6 text-base text-ink outline-none transition-colors placeholder:text-ink sm:max-w-[376px]',
            error ? 'border-red-500' : 'border-line focus:border-brand',
          )}
        />
        <Button type="submit" aria-label="Subscribe to newsletter">
          Search
        </Button>
      </div>
      <p
        id="newsletter-error"
        role={error ? 'alert' : undefined}
        className={cn('mt-2 min-h-5 text-sm', error ? 'text-red-600' : 'text-brand')}
        aria-live="polite"
      >
        {error || (subscribed ? 'Thanks! You are subscribed to ByteSpace updates.' : '')}
      </p>
    </form>
  );
}
