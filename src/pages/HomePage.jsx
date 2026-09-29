import PageShell from '../components/layout/PageShell';
import Hero from '../components/sections/Hero';
import PartnerLogos from '../components/sections/PartnerLogos';
import DiscoverCourses from '../components/sections/DiscoverCourses';
import LearningPaths from '../components/sections/LearningPaths';
import GrowthAndCreators from '../components/sections/GrowthAndCreators';
import CreatorCta from '../components/sections/CreatorCta';
import Testimonials from '../components/sections/Testimonials';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function HomePage() {
  useDocumentTitle('ByteSpace - Get Access to Hundreds of Courses');
  return (
    <PageShell>
      <Hero />
      <PartnerLogos />
      <DiscoverCourses />
      <LearningPaths />
      <GrowthAndCreators />
      <CreatorCta />
      <Testimonials />
    </PageShell>
  );
}
