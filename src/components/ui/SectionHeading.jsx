import { cn } from '../../utils/cn';

/**
 * Section title + optional description.
 * `size` follows the three heading sizes used in the design (44 / 36 px).
 */
export default function SectionHeading({
  id,
  title,
  description,
  align = 'center',
  size = 'lg',
  tone = 'dark',
  className,
  descriptionClassName,
}) {
  const centered = align === 'center';
  return (
    <div className={cn(centered && 'mx-auto text-center', className)}>
      <h2
        id={id}
        className={cn(
          'text-balance font-display font-semibold',
          size === 'lg' && 'text-[32px] leading-[1.2] sm:text-[40px] lg:text-[44px]',
          size === 'md' && 'text-[28px] leading-[1.25] sm:text-[36px]',
          tone === 'dark' ? 'text-ink-heading' : 'text-surface',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 text-base leading-[1.6] sm:text-lg',
            tone === 'dark' ? 'text-ink-muted' : 'text-surface',
            centered && 'mx-auto',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
