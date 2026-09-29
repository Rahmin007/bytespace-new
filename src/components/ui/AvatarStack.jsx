import { cn } from '../../utils/cn';

/**
 * Overlapping row of learner photos followed by a count badge ("26+", "2K+").
 * The photos are decorative; the whole group gets one accessible label instead.
 */
export default function AvatarStack({
  avatars,
  countLabel,
  label,
  size = 32,
  overlap = 8,
  ringClassName = 'ring-white',
  badgeClassName = 'bg-lime text-ink',
  className,
}) {
  const style = { width: size, height: size, marginLeft: -overlap };
  return (
    <div role="img" aria-label={label} className={cn('flex items-center pl-2', className)}>
      {avatars.map((src, index) => (
        <img
          key={`${src}-${index}`}
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          width={size}
          height={size}
          className={cn('rounded-full object-cover ring-2', ringClassName)}
          style={style}
        />
      ))}
      <span
        aria-hidden="true"
        className={cn(
          'relative flex items-center justify-center rounded-full text-xs font-medium ring-2',
          ringClassName,
          badgeClassName,
        )}
        style={style}
      >
        {countLabel}
      </span>
    </div>
  );
}
