import { COURSES, findCourse } from '../data/courses';
import { TOPIC_COURSES } from '../data/content';

/** Returns the courses for a topic, narrowed down by the search query (if any). */
export function getVisibleCourses(topic, query = '') {
  const ids = TOPIC_COURSES[topic] ?? [];
  const courses = ids.map(findCourse).filter(Boolean);
  const q = query.trim().toLowerCase();
  if (!q) return courses;
  // A search looks through every course, not only the selected topic.
  return COURSES.filter(
    (course) => course.title.toLowerCase().includes(q) || course.creator.toLowerCase().includes(q),
  );
}
