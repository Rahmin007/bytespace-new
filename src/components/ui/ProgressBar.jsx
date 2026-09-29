import { cn } from '../../utils/cn';

/** Accessible progress bar (lime fill on a light track by default). */
export default function ProgressBar({
  value,
  label,
  className,
  trackClassName = 'bg-surface',
  fillClassName = 'bg-lime',
}) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      className={cn('h-2 w-full overflow-hidden rounded-full', trackClassName, className)}
    >
      <div className={cn('h-full rounded-full', fillClassName)} style={{ width: `${clamped}%` }} />
    </div>
  );
}
