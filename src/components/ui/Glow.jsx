import { cn } from '../../utils/cn';

const COLORS = {
  lime: 'rgba(212, 251, 32, 0.55)',
  blue: 'rgba(0, 59, 226, 0.22)',
};

/** Soft blurred colour blob used behind the light sections (purely decorative). */
export default function Glow({ color = 'lime', size, left, top, right, bottom, className }) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute rounded-full', className)}
      style={{
        width: size,
        height: size,
        left,
        top,
        right,
        bottom,
        background: `radial-gradient(circle, ${COLORS[color]} 0%, transparent 65%)`,
      }}
    />
  );
}
