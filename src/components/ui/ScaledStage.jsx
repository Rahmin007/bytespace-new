import { useRef } from 'react';
import { useElementWidth } from '../../hooks/useElementWidth';
import { cn } from '../../utils/cn';

/**
 * A fixed-size "artboard" for the layered illustrations (people, floating
 * cards, 3D shapes). Children are positioned with the exact pixel values from
 * Figma, and the whole stage is scaled down proportionally when the screen is
 * narrower than `fitWidth`, so the composition never breaks on smaller screens.
 *
 * @param {number} width     Stage width in design pixels.
 * @param {number} height    Stage height in design pixels.
 * @param {number} fitWidth  Width that must fit on screen before scaling starts.
 * @param {number} minScale  Smallest allowed scale (content outside is clipped by the section).
 * @param {'center'|'start'|'end'} align  Horizontal alignment inside the parent.
 */
export default function ScaledStage({
  width,
  height,
  fitWidth = width,
  minScale = 0.5,
  align = 'center',
  className,
  children,
}) {
  const wrapperRef = useRef(null);
  const available = useElementWidth(wrapperRef);
  const scale = available ? Math.min(1, Math.max(minScale, available / fitWidth)) : 1;

  const position = {
    center: {
      left: '50%',
      transform: `translateX(-50%) scale(${scale})`,
      transformOrigin: 'top center',
    },
    start: { left: 0, transform: `scale(${scale})`, transformOrigin: 'top left' },
    end: { right: 0, transform: `scale(${scale})`, transformOrigin: 'top right' },
  }[align];

  return (
    <div
      ref={wrapperRef}
      className={cn('relative w-full', className)}
      style={{ height: height * scale }}
      data-scale={scale.toFixed(3)}
    >
      <div className="absolute top-0" style={{ width, height, ...position }}>
        {children}
      </div>
    </div>
  );
}
