import { cn } from '../../utils/cn';

/** A toggle pill used to filter courses by topic. */
export default function TopicChip({ label, active = false, onClick }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        'h-[43px] whitespace-nowrap rounded-full px-4 text-base transition-colors duration-150',
        active ? 'bg-lime text-ink' : 'bg-surface text-ink-body hover:bg-[#E9E9EC]',
      )}
    >
      {label}
    </button>
  );
}
