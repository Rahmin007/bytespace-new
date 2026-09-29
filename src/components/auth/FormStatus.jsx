import { cn } from '../../utils/cn';

/** Announces the result of a form submission to everyone, including screen reader users. */
export default function FormStatus({ message, tone = 'success', className }) {
  return (
    <div role="status" aria-live="polite" className={className}>
      {message && (
        <p
          className={cn(
            'rounded-xl px-4 py-3 text-base',
            tone === 'success' ? 'bg-lime/40 text-ink' : 'bg-surface text-ink-body',
          )}
        >
          {message}
        </p>
      )}
    </div>
  );
}
