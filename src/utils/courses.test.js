import { getVisibleCourses } from './courses';
import { COURSES } from '../data/courses';
import { TOPICS } from '../data/content';

describe('getVisibleCourses', () => {
  it('shows all six courses for Featured', () => {
    expect(getVisibleCourses('Featured')).toHaveLength(6);
  });

  it('returns only the courses mapped to a topic', () => {
    const titles = getVisibleCourses('Data Science').map((course) => course.title);
    expect(titles).toEqual(['the Power of Big Data']);
  });

  it('returns an empty list for a topic with no courses', () => {
    expect(getVisibleCourses('Cooking')).toEqual([]);
  });

  it('searches every course by title, ignoring case and spaces', () => {
    expect(getVisibleCourses('Cooking', '  FIGMA ').map((c) => c.id)).toEqual([
      'learn-figma-from-basic',
    ]);
  });

  it('searches by creator name', () => {
    expect(getVisibleCourses('Featured', 'purepearl')).toHaveLength(COURSES.length);
  });

  it('never references a course id that does not exist', () => {
    TOPICS.forEach((topic) => {
      getVisibleCourses(topic).forEach((course) => expect(course).toBeDefined());
    });
  });
});
