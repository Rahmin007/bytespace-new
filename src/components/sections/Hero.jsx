import Navbar from '../layout/Navbar';
import SearchBar from './SearchBar';
import ScaledStage from '../ui/ScaledStage';
import Shape from '../ui/Shape';
import { HappyStudentsCard, LearningProgressCard, TopicStatCard } from '../ui/FloatingCards';
import heroStudent from '../../assets/images/people/hero-student.webp';

/**
 * Landing hero. The illustration below the search bar is a 1440 x 520 stage;
 * every `left`/`top` value is the element's position in the Figma frame
 * (with the stage starting at y = 504).
 */
export default function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden" aria-labelledby="hero-title">
      <Navbar />

      <div className="container-page relative z-10 pt-6 text-center lg:pt-[46px]">
        <h1
          id="hero-title"
          className="mx-auto max-w-[920px] text-balance font-display text-[40px] font-semibold leading-[1.15] text-white sm:text-[56px] lg:text-[72px] lg:leading-[86px]"
        >
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-6 max-w-[720px] text-base leading-[1.6] text-surface sm:text-lg lg:mt-[48px]">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide
          range of courses.
        </p>
        <SearchBar className="mx-auto mt-10 lg:mt-[56px]" />
      </div>

      <ScaledStage width={1440} height={520} fitWidth={1200} minScale={0.55} className="-mt-[10px]">
        {/* Decorative 3D shapes (some intentionally overflow into the title area) */}
        <Shape name="spring" color="lime" left={-122} top={-283} size={387} />
        <Shape name="cylinder" color="lime" left={1227} top={-284} size={372} />
        <Shape name="spring" left={184} top={-27} size={176} flip />
        <Shape name="pyramid" left={1104} top={-40} size={189} />
        <Shape name="torus" left={14} top={177} size={344} />
        <Shape name="springWide" left={1124} top={168} size={332} />

        {/* Lime half-circle behind the student */}
        <div
          aria-hidden="true"
          className="absolute rounded-full bg-lime-bright"
          style={{ left: 160, top: 80, width: 1121, height: 1121 }}
        />
        <img
          src={heroStudent}
          alt="Smiling student wearing headphones and holding a laptop"
          width={578}
          height={541}
          className="absolute max-w-none drop-shadow-[0_24px_32px_rgba(3,8,24,0.25)]"
          style={{ left: 431, top: 8, width: 578, height: 541 }}
        />

        <TopicStatCard style={{ left: 404, top: 135 }} />
        <LearningProgressCard style={{ left: 842, top: 147 }} />
        <HappyStudentsCard style={{ left: 328, top: 333 }} />
      </ScaledStage>
    </section>
  );
}
