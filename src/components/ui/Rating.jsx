import { StarIcon } from './icons';
import { cn } from '../../utils/cn';

/** "4.5 ★" rating used on course cards. */
export default function Rating({ value, className, starClassName = 'h-4 w-4 text-line' }) {
  return (
    <p className={cn('flex items-center gap-1 text-lg text-ink-soft', className)}>
      <span className="sr-only">Rated </span>
      {value.toFixed(1)}
      <span className="sr-only"> out of 5</span>
      <StarIcon className={starClassName} />
    </p>
  );
}
