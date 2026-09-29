import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const VARIANTS = {
  primary: 'bg-lime text-ink hover:bg-lime-dark active:bg-lime-dark',
  outline: 'border border-line bg-white text-ink hover:border-ink-muted',
};

const SIZES = {
  md: 'h-[46px] px-6 text-lg',
  sm: 'h-10 px-5 text-base',
};

/**
 * The pill-shaped button used across the site.
 * - pass `to` to render a router <Link>
 * - pass `href` to render a normal <a>
 * - otherwise it renders a <button> (type="button" unless you pass type="submit")
 */
export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  type = 'button',
  ...props
}) {
  const classes = cn(
    'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60',
    VARIANTS[variant],
    SIZES[size],
    fullWidth && 'w-full',
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
