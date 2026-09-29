import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import TopicChip from '../ui/TopicChip';
import CourseCard from '../ui/CourseCard';
import Button from '../ui/Button';
import { EXTRA_TOPICS, TOPICS } from '../../data/content';
import { getVisibleCourses } from '../../utils/courses';

export default function DiscoverCourses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const activeTopic = searchParams.get('topic') ?? 'Featured';
  const [showAllTopics, setShowAllTopics] = useState(EXTRA_TOPICS.includes(activeTopic));

  const topics = showAllTopics ? [...TOPICS, ...EXTRA_TOPICS] : TOPICS;
  const courses = useMemo(() => getVisibleCourses(activeTopic, query), [activeTopic, query]);

  // The selected topic and search live in the URL, so filtered views can be shared.
  const updateParams = (changes) => {
    const next = new URLSearchParams(searchParams);
    Object.entries(changes).forEach(([key, value]) =>
      value ? next.set(key, value) : next.delete(key),
    );
    setSearchParams(next, { replace: true, preventScrollReset: true });
  };
  const selectTopic = (topic) => updateParams({ topic: topic === 'Featured' ? '' : topic, q: '' });
  const clearSearch = () => updateParams({ q: '' });

  return (
    <section id="courses" aria-labelledby="courses-title" className="scroll-mt-4 bg-white">
      <div className="container-page pb-[88px] pt-16 lg:pt-[62px]">
        <SectionHeading
          id="courses-title"
          title={
            <>
              Discover Your Passion,
              <br className="hidden sm:block" /> Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          descriptionClassName="max-w-[905px]"
        />

        <div
          role="group"
          aria-label="Filter courses by topic"
          className="scrollbar-none -mx-5 mt-10 flex gap-3 overflow-x-auto px-5 pb-1 sm:mx-auto sm:max-w-[1100px] sm:flex-wrap sm:justify-center sm:gap-x-4 sm:gap-y-[21px] sm:overflow-visible sm:px-0 lg:mt-[45px]"
        >
          {topics.map((topic) => (
            <TopicChip
              key={topic}
              label={topic}
              active={!query && topic === activeTopic}
              onClick={() => selectTopic(topic)}
            />
          ))}
          <button
            type="button"
            aria-expanded={showAllTopics}
            onClick={() => setShowAllTopics((value) => !value)}
            className="h-[43px] shrink-0 whitespace-nowrap px-1 text-base text-brand hover:underline"
          >
            {showAllTopics ? '− Less' : '+ More'}
          </button>
        </div>

        {query && (
          <p className="mt-10 text-center text-lg text-ink-body" aria-live="polite">
            {courses.length} {courses.length === 1 ? 'result' : 'results'} for &ldquo;{query}&rdquo;
            <button type="button" onClick={clearSearch} className="ml-3 text-brand hover:underline">
              Clear search
            </button>
          </p>
        )}

        {courses.length > 0 ? (
          <ul className="mt-12 grid grid-cols-1 gap-[38px] sm:grid-cols-2 lg:mt-[76px] lg:grid-cols-3">
            {courses.map((course) => (
              <li key={course.id}>
                <CourseCard course={course} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mx-auto mt-12 max-w-md rounded-card border border-dashed border-line px-6 py-12 text-center lg:mt-[76px]">
            <p className="font-display text-xl font-semibold text-ink">
              {query ? 'No courses match your search' : `No ${activeTopic} courses yet`}
            </p>
            <p className="mt-2 text-ink-muted">
              {query
                ? 'Try another keyword, like “Figma” or “Data”.'
                : 'New courses are added every week. Browse the featured courses in the meantime.'}
            </p>
            <Button className="mt-6" onClick={() => selectTopic('Featured')}>
              Show featured courses
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
