import ScaledStage from '../ui/ScaledStage';
import Shape from '../ui/Shape';
import CourseCard from '../ui/CourseCard';
import { LearningProgressCard } from '../ui/FloatingCards';
import { COURSES } from '../../data/courses';
import { GROWTH_STATS } from '../../data/content';
import heroStudent from '../../assets/images/people/hero-student.webp';

export default function GrowthSection() {
  return (
    <section aria-labelledby="growth-title" className="relative">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-6">
        <div className="lg:pb-[40px]">
          <h2
            id="growth-title"
            className="max-w-[560px] text-balance font-display text-[32px] font-semibold leading-[1.2] text-ink sm:text-[40px] lg:text-[44px]"
          >
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="mt-8 max-w-[472px] text-base leading-[1.6] text-ink-body sm:text-lg lg:mt-[45px]">
            Explore our curated selection of courses tailored to enhance your capabilities and
            accelerate your career journey. Whether you are looking to sharpen specific skills, gain
            industry expertise, or embark on a new career path entirely, we have the resources you
            need.
          </p>
          <dl className="mt-10 flex gap-14 lg:mt-[52px]">
            {GROWTH_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-base text-ink-body sm:text-lg">{stat.label}</dt>
                <dd className="text-[36px] font-medium leading-none text-brand">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 580 x 560 illustration stage; positions measured from the Figma frame */}
        <ScaledStage width={580} height={560} minScale={0.5} align="end" className="max-lg:mx-auto">
          <div className="absolute left-0 top-0 h-[386px] w-[375px]">
            <CourseCard course={COURSES[0]} metaSize="md" as="div" className="hover:shadow-none" />
          </div>
          <img
            src={heroStudent}
            alt="Student learning online with a laptop"
            loading="lazy"
            width={577}
            height={540}
            className="absolute max-w-none drop-shadow-[0_28px_28px_rgba(3,8,24,0.28)]"
            style={{ left: 1, top: 13, width: 577, height: 540 }}
          />
          <LearningProgressCard height={138} style={{ left: 346, top: 214 }} />
          <Shape name="springWide" color="lime" left={405} top={68} size={216} />
        </ScaledStage>
      </div>
    </section>
  );
}
