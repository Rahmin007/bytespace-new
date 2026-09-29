import { useEffect, useRef, useState } from 'react';

/**
 * Simulates a network request so the forms show a realistic loading state.
 * There is no backend in this assessment; swap `run` for a real API call later.
 */
export function useFakeSubmit(delay = 700) {
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const run = (onDone) => {
    setStatus('loading');
    timer.current = setTimeout(() => {
      setStatus('success');
      onDone?.();
    }, delay);
  };

  return { status, run, reset: () => setStatus('idle') };
}
