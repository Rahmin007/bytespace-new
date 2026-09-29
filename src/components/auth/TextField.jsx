import { forwardRef, useId } from 'react';
import { cn } from '../../utils/cn';

/**
 * Labelled input with an accessible error message.
 * `endAdornment` renders inside the right edge (used for the show-password button).
 */
const TextField = forwardRef(function TextField(
  { label, error, className, endAdornment, type = 'text', ...inputProps },
  ref,
) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm text-ink">
        {label}
      </label>
      <div className="relative mt-3">
        <input
          ref={ref}
          id={id}
          type={type}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            'h-[54px] w-full rounded-xl border bg-white px-6 text-lg text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-brand',
            error ? 'border-red-500' : 'border-line-input',
            endAdornment && 'pr-14',
          )}
          {...inputProps}
        />
        {endAdornment && (
          <div className="absolute inset-y-0 right-2 flex items-center">{endAdornment}</div>
        )}
      </div>
      {error && (
        <p id={errorId} className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
});

export default TextField;
