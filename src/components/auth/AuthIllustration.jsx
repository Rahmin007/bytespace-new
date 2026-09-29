import ScaledStage from '../ui/ScaledStage';
import Shape from '../ui/Shape';
import CourseCard from '../ui/CourseCard';
import { HappyStudentsCard } from '../ui/FloatingCards';
import { findCourse } from '../../data/courses';

/** Stacked course cards shown beside the sign in / sign up forms (552 x 587 stage). */
export default function AuthIllustration() {
  return (
    <ScaledStage width={552} height={587} minScale={0.6} align="start">
      <div className="absolute h-[386px] w-[375px]" style={{ left: 26, top: 89 }}>
        <CourseCard course={findCourse('build-digital-asset')} metaSize="md" as="div" />
      </div>
      <div className="absolute h-[386px] w-[375px]" style={{ left: 137, top: 0 }}>
        <CourseCard course={findCourse('the-power-of-big-data')} metaSize="md" as="div" />
      </div>
      <Shape name="torus" color="lime" left={54} top={16} size={147} />
      <Shape name="pyramid" color="lime" left={0} top={398} size={189} />
      <HappyStudentsCard variant="lime" compact style={{ left: 253, top: 436 }} />
      <Shape name="spring" left={376} top={322} size={176} flip />
    </ScaledStage>
  );
}
