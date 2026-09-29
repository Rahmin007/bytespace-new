import ScaledStage from '../ui/ScaledStage';
import Shape from '../ui/Shape';
import { HappyStudentsCard, RevenueCard, YearToDateCard } from '../ui/FloatingCards';
import { CheckCircleIcon } from '../ui/icons';
import { CREATOR_BENEFITS } from '../../data/content';
import creatorStudent from '../../assets/images/people/creator-student.webp';

export default function CreatorSection() {
  return (
    <section id="creators" aria-labelledby="creators-title" className="relative scroll-mt-4">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-6">
        {/* 545 x 683 illustration stage; positions measured from the Figma frame */}
        <ScaledStage
          width={545}
          height={683}
          minScale={0.5}
          align="start"
          className="order-2 max-lg:mx-auto lg:order-1"
        >
          <RevenueCard style={{ left: 0, top: 44 }} />
          <YearToDateCard className="z-10" style={{ left: 0, top: 194 }} />
          <img
            src={creatorStudent}
            alt="Course creator smiling while holding a tablet"
            loading="lazy"
            width={683}
            height={683}
            className="absolute max-w-none drop-shadow-[0_28px_28px_rgba(3,8,24,0.25)]"
            style={{ left: -96, top: 0, width: 683, height: 683 }}
          />
          <Shape name="spring" color="lime" left={303} top={114} size={216} />
          <HappyStudentsCard compact style={{ left: 283, top: 413 }} />
        </ScaledStage>

        <div className="order-1 lg:order-2 lg:pl-[11px]">
          <h2
            id="creators-title"
            className="max-w-[420px] text-balance font-display text-[32px] font-semibold leading-[1.2] text-ink sm:text-[40px] lg:text-[44px]"
          >
            Create &amp; Manage Courses Easily.
          </h2>
          <p className="mt-8 max-w-[560px] text-base leading-[1.6] text-ink-body sm:text-lg lg:mt-[42px]">
            <strong className="font-bold text-ink">ByteSpace</strong> supports individuals or
            entities in the creation, publication, and administration of educational courses.
          </p>
          <ul className="mt-8 space-y-4 lg:mt-[39px]">
            {CREATOR_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-base text-ink sm:text-lg">
                <CheckCircleIcon className="h-5 w-5 shrink-0 text-brand" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
