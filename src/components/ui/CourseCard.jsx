import AvatarStack from './AvatarStack';
import Rating from './Rating';
import { LevelIcon } from './icons';
import { COURSE_LEARNERS } from '../../data/avatars';
import { cn } from '../../utils/cn';

/**
 * Course card from the design (375 x 386 on desktop).
 * `metaSize` switches between the two pill heights used in the Figma file
 * (26px in the course grid, 32px in the illustrations).
 */
export default function CourseCard({ course, metaSize = 'sm', className, as: Tag = 'article' }) {
  const {
    title,
    creator,
    image,
    lessons,
    duration,
    comments,
    rating,
    level,
    enrolledExtra,
    price,
  } = course;

  const meta = [`${lessons} Lessons`, duration, `${comments} Comments`];

  return (
    <Tag
      className={cn(
        'flex h-full w-full flex-col rounded-card border border-line bg-white p-4 transition-shadow duration-200 hover:shadow-float',
        className,
      )}
    >
      <div className="relative aspect-[341/195] overflow-hidden rounded-media bg-surface">
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <ul
          aria-label="Course details"
          className="absolute inset-x-3 bottom-[19px] flex gap-3 overflow-hidden"
        >
          {meta.map((item) => (
            <li
              key={item}
              className={cn(
                'flex shrink-0 items-center whitespace-nowrap rounded-full bg-[#F6F6F6]/60 px-3 text-xs text-ink-soft backdrop-blur-md',
                metaSize === 'sm' ? 'h-[26px]' : 'h-8',
              )}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <h3
          title={title}
          className="min-w-0 truncate font-display text-xl font-semibold leading-[1.3] text-black"
        >
          {title}
        </h3>
        <Rating value={rating} className="shrink-0 leading-[1.4]" />
      </div>
      <p className="mt-0.5 text-xs text-ink-soft">
        by <span className="text-brand">{creator}</span>
      </p>

      <div className="mt-5 flex items-center gap-3">
        <span className="inline-flex h-8 items-center gap-2 rounded-full bg-surface px-4 text-xs text-ink-body">
          <LevelIcon className="h-[13px] w-[13px]" />
          {level}
        </span>
        <AvatarStack
          avatars={COURSE_LEARNERS}
          countLabel={`${enrolledExtra}+`}
          label={`${COURSE_LEARNERS.length + enrolledExtra}+ learners enrolled`}
          size={32}
          overlap={8}
          ringClassName="ring-0"
        />
      </div>

      <p className="mt-auto pt-4 text-xs text-ink-soft">
        <span className="font-display text-xl font-semibold text-brand">${price}</span>
        /lifetime
      </p>
    </Tag>
  );
}
