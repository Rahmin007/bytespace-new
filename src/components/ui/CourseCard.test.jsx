import { render, screen, within } from '@testing-library/react';
import CourseCard from './CourseCard';
import { COURSES } from '../../data/courses';

const course = COURSES[3]; // "Balancing Productivity and Self-Care" - long title

describe('CourseCard', () => {
  it('shows the course title as a heading, with the full title on hover', () => {
    render(<CourseCard course={course} />);
    const heading = screen.getByRole('heading', { name: course.title });
    expect(heading).toHaveAttribute('title', course.title);
  });

  it('shows the lesson, duration and comment details', () => {
    render(<CourseCard course={course} />);
    const details = within(screen.getByRole('list', { name: 'Course details' }));
    expect(details.getByText('17 Lessons')).toBeInTheDocument();
    expect(details.getByText('2 hours 16 mins')).toBeInTheDocument();
    expect(details.getByText('59 Comments')).toBeInTheDocument();
  });

  it('shows creator, level, rating and price', () => {
    render(<CourseCard course={course} />);
    expect(screen.getByText('purepearl studio')).toBeInTheDocument();
    expect(screen.getByText('Beginner')).toBeInTheDocument();
    expect(screen.getByText(/4\.5/)).toBeInTheDocument();
    expect(screen.getByText('$25')).toBeInTheDocument();
    expect(screen.getByText('/lifetime', { exact: false })).toBeInTheDocument();
  });

  it('describes the learner avatars with a single accessible label', () => {
    render(<CourseCard course={course} />);
    expect(screen.getByRole('img', { name: '30+ learners enrolled' })).toBeInTheDocument();
  });

  it('can render as a non-article element for illustrations', () => {
    const { container } = render(<CourseCard course={course} as="div" />);
    expect(container.querySelector('article')).toBeNull();
  });
});
