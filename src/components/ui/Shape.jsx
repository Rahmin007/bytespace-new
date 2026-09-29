import { SHAPES } from '../../data/shapes';
import { cn } from '../../utils/cn';

/**
 * One decorative 3D shape (spring, torus, cone...). Positioned absolutely
 * using Figma coordinates. Purely decorative, so it is hidden from screen readers.
 */
export default function Shape({ name, color = 'white', left, top, size, flip = false, className }) {
  return (
    <img
      src={SHAPES[name][color]}
      alt=""
      aria-hidden="true"
      draggable="false"
      loading="lazy"
      decoding="async"
      width={size}
      height={size}
      className={cn('pointer-events-none absolute max-w-none select-none', className)}
      style={{ left, top, width: size, height: size, transform: flip ? 'scaleX(-1)' : undefined }}
      data-shape={`${name}-${color}`}
    />
  );
}
