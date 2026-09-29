/** Lets keyboard users jump past the navigation. Visible only when focused. */
export default function SkipLink({ targetId = 'main' }) {
  return (
    <a
      href={`#${targetId}`}
      className="sr-only z-50 rounded-full bg-lime px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      Skip to content
    </a>
  );
}
