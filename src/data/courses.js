import learnFigma from '../assets/images/courses/learn-figma.jpg';
import digitalAsset from '../assets/images/courses/digital-asset.jpg';
import bigData from '../assets/images/courses/big-data.jpg';
import productivity from '../assets/images/courses/productivity.jpg';
import money from '../assets/images/courses/money.jpg';
import startup from '../assets/images/courses/startup.jpg';

/**
 * Course catalogue shown on the landing page. In a real app this would come
 * from an API; keeping it as data means the UI is just `courses.map(...)`.
 */
export const COURSES = [
  {
    id: 'learn-figma-from-basic',
    title: 'Learn Figma from Basic',
    creator: 'purepearl studio',
    image: learnFigma,
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    rating: 4.5,
    level: 'Beginner',
    enrolledExtra: 26,
    price: 25,
  },
  {
    id: 'build-digital-asset',
    title: 'Build Digital Asset',
    creator: 'purepearl studio',
    image: digitalAsset,
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    rating: 4.5,
    level: 'Beginner',
    enrolledExtra: 26,
    price: 25,
  },
  {
    id: 'the-power-of-big-data',
    title: 'the Power of Big Data',
    creator: 'purepearl studio',
    image: bigData,
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    rating: 4.5,
    level: 'Beginner',
    enrolledExtra: 26,
    price: 25,
  },
  {
    id: 'balancing-productivity-and-self-care',
    title: 'Balancing Productivity and Self-Care',
    creator: 'purepearl studio',
    image: productivity,
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    rating: 4.5,
    level: 'Beginner',
    enrolledExtra: 26,
    price: 25,
  },
  {
    id: 'mastering-money-management',
    title: 'Mastering Money Management',
    creator: 'purepearl studio',
    image: money,
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    rating: 4.5,
    level: 'Beginner',
    enrolledExtra: 26,
    price: 25,
  },
  {
    id: 'from-idea-to-startup-success',
    title: 'From Idea to Startup Success',
    creator: 'purepearl studio',
    image: startup,
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    rating: 4.5,
    level: 'Beginner',
    enrolledExtra: 26,
    price: 25,
  },
];

export const findCourse = (id) => COURSES.find((course) => course.id === id);
