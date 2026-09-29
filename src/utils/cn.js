/**
 * Joins class names and skips falsy values.
 * cn('a', isActive && 'b', undefined) -> 'a b'
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
