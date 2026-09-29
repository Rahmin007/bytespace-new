import { useState } from 'react';
import TextField from './TextField';
import { EyeIcon, EyeOffIcon } from '../ui/icons';

/** Password input with a show / hide toggle. */
export default function PasswordField({ label = 'Password', ...props }) {
  const [visible, setVisible] = useState(false);

  return (
    <TextField
      {...props}
      label={label}
      type={visible ? 'text' : 'password'}
      endAdornment={
        <button
          type="button"
          onClick={() => setVisible((value) => !value)}
          aria-label={visible ? 'Hide password' : 'Show password'}
          aria-pressed={visible}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink-muted hover:text-ink"
        >
          {visible ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
        </button>
      }
    />
  );
}
