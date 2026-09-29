/**
 * The small "widget" cards that float around the people in the illustrations.
 * Sizes and text come straight from Figma; they are reused in the hero,
 * the growth section, the creator section and the auth pages.
 */
import AvatarStack from './AvatarStack';
import ProgressBar from './ProgressBar';
import { StarIcon } from './icons';
import { HAPPY_STUDENTS } from '../../data/avatars';
import { cn } from '../../utils/cn';

export function TopicStatCard({ className, style }) {
  return (
    <div
      className={cn('absolute rounded-panel bg-white px-4 py-4 shadow-float', className)}
      style={{ width: 208, height: 70, ...style }}
    >
      <p className="text-base leading-none text-ink">UI/UX Design</p>
      <p className="mt-2 flex items-center gap-2 whitespace-nowrap text-xs leading-none text-ink-muted">
        200 Courses
        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink-muted" />
        1000+ Students
      </p>
    </div>
  );
}

export function LearningProgressCard({ value = 55, height = 131, className, style }) {
  return (
    <div
      className={cn('absolute rounded-panel bg-white px-4 pt-4 shadow-float', className)}
      style={{ width: 232, height, ...style }}
    >
      <p className="text-sm leading-none text-ink">Learning Progress</p>
      <p className="mt-3 font-display text-5xl font-medium leading-none text-ink">{value}%</p>
      <ProgressBar value={value} label="Learning progress" className="mt-4" />
    </div>
  );
}

export function HappyStudentsCard({ variant = 'white', compact = false, className, style }) {
  const lime = variant === 'lime';
  return (
    <div
      className={cn(
        'absolute rounded-panel px-4 pt-4 shadow-float',
        lime ? 'bg-lime' : 'bg-white',
        className,
      )}
      style={{ width: 258, height: compact ? 123 : 121, ...style }}
    >
      <p className="text-base leading-none text-ink">Happy Students</p>
      <p className="mt-1.5 flex items-center gap-1 text-xs text-ink">
        4.5 <span className="text-ink-muted">(240)</span>
        <StarIcon className={cn('h-3.5 w-3.5', lime ? 'text-brand' : 'text-lime')} />
      </p>
      <AvatarStack
        avatars={HAPPY_STUDENTS}
        countLabel="2K+"
        label="More than 2,000 happy students"
        size={43}
        overlap={16}
        ringClassName="ring-0"
        badgeClassName={lime ? 'bg-ink text-white' : 'bg-lime text-ink'}
        className="mt-2"
      />
    </div>
  );
}

function BlueStatCard({ title, subtitle, value, children, className, style }) {
  return (
    <div
      className={cn('absolute rounded-panel bg-brand p-4 text-surface shadow-float', className)}
      style={style}
    >
      <p className="text-base leading-tight">{title}</p>
      <p className="text-[10px] leading-tight">{subtitle}</p>
      <p className="mt-2 text-2xl font-bold leading-none">{value}</p>
      {children}
    </div>
  );
}

export function RevenueCard({ className, style }) {
  return (
    <BlueStatCard
      title="Total Revenue"
      subtitle="July 1-28"
      value="$120.29"
      className={className}
      style={{ width: 232, height: 119, ...style }}
    >
      <ProgressBar
        value={60}
        label="Revenue goal progress"
        className="mt-3 w-[190px]"
        trackClassName="bg-white"
        fillClassName="bg-lime-bright"
      />
    </BlueStatCard>
  );
}

export function YearToDateCard({ className, style }) {
  return (
    <BlueStatCard
      title="Year to Date"
      subtitle="2023"
      value="$1,200.38"
      className={className}
      style={{ minWidth: 134, height: 135, ...style }}
    >
      <span className="mt-3 inline-flex h-6 items-center rounded-full bg-lime-bright px-2 text-[10px] font-medium text-ink">
        +12$
      </span>
    </BlueStatCard>
  );
}
