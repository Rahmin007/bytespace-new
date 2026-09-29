import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { CATEGORIES } from '../../data/content';
import { topicUrl } from '../../utils/routes';

export default function LearningPaths() {
  return (
    <section id="categories" aria-labelledby="paths-title" className="scroll-mt-4 bg-white">
      <div className="container-page pb-[119px]">
        <SectionHeading
          id="paths-title"
          size="md"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          descriptionClassName="max-w-[910px] !mt-4"
        />

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-16 lg:grid-cols-6 lg:gap-[38px]">
          {CATEGORIES.map(({ label, Icon, topic, size: [width, height] }) => (
            <li key={label}>
              <Link
                to={topicUrl(topic)}
                aria-label={`${label} courses`}
                className="flex aspect-square flex-col items-center justify-center rounded-card border border-line bg-white px-2 text-center transition-colors hover:border-brand"
              >
                <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-lime text-ink">
                  <Icon style={{ width, height }} className="" />
                </span>
                <span className="mt-[11px] text-lg text-ink sm:text-xl">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
