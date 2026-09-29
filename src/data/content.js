import {
  BusinessIcon,
  DesignIcon,
  DevelopmentIcon,
  LaptopIcon,
  MarketingIcon,
  PhotographyIcon,
} from '../components/ui/icons';
import { TESTIMONIAL_AVATARS } from './avatars';
import partner1 from '../assets/logos/partner-1.svg';
import partner2 from '../assets/logos/partner-2.svg';
import partner3 from '../assets/logos/partner-3.svg';
import partner4 from '../assets/logos/partner-4.svg';
import partner5 from '../assets/logos/partner-5.svg';
import { ROUTES } from '../utils/routes';

export const NAV_LINKS = [
  { label: 'Home', to: ROUTES.home },
  { label: 'Courses', to: ROUTES.courses },
  { label: 'Creators', to: ROUTES.creators },
];

export const PARTNER_LOGOS = [partner1, partner2, partner3, partner4, partner5].map(
  (src, index) => ({ src, alt: `Partner company ${index + 1}` }),
);

/** Topic filters for the "Discover Your Passion" section. */
export const TOPICS = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
];

/** Extra topics revealed by the "+ More" button. */
export const EXTRA_TOPICS = ['Writing', 'Languages', 'Health & Fitness', 'Finance'];

/**
 * Which courses appear for each topic. The design only shows the "Featured"
 * set, so the other topics reuse the same six cards in a different order to
 * demonstrate that the filter works.
 */
export const TOPIC_COURSES = {
  Featured: [
    'learn-figma-from-basic',
    'build-digital-asset',
    'the-power-of-big-data',
    'balancing-productivity-and-self-care',
    'mastering-money-management',
    'from-idea-to-startup-success',
  ],
  'UI/UX Design': ['learn-figma-from-basic', 'build-digital-asset'],
  'Graphic Design': ['build-digital-asset', 'learn-figma-from-basic'],
  'Digital Illustration': ['build-digital-asset'],
  'Data Science': ['the-power-of-big-data'],
  'Web Development': ['the-power-of-big-data', 'learn-figma-from-basic'],
  Productivity: ['balancing-productivity-and-self-care'],
  Photography: ['build-digital-asset', 'learn-figma-from-basic'],
  'Freelance & Entrepreneurship': ['from-idea-to-startup-success', 'mastering-money-management'],
  Marketing: ['from-idea-to-startup-success'],
  'Creative Marketing': ['from-idea-to-startup-success', 'build-digital-asset'],
  'Social Media': ['from-idea-to-startup-success'],
};

/**
 * "Explore Diverse Learning Paths" categories. `topic` is the course filter a
 * category opens; `size` is the icon size from Figma (width x height in px).
 */
export const CATEGORIES = [
  { label: 'Design', Icon: DesignIcon, topic: 'UI/UX Design', size: [28, 28] },
  { label: 'Development', Icon: DevelopmentIcon, topic: 'Web Development', size: [24, 33] },
  { label: 'IT & Software', Icon: LaptopIcon, topic: 'Data Science', size: [36, 24] },
  { label: 'Business', Icon: BusinessIcon, topic: 'Freelance & Entrepreneurship', size: [30, 27] },
  { label: 'Marketing', Icon: MarketingIcon, topic: 'Marketing', size: [30, 30] },
  { label: 'Photography', Icon: PhotographyIcon, topic: 'Photography', size: [30, 27] },
];

export const GROWTH_STATS = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
];

export const CREATOR_BENEFITS = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

export const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: TESTIMONIAL_AVATARS.sarah,
    quote:
      'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: TESTIMONIAL_AVATARS.james,
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: TESTIMONIAL_AVATARS.alex,
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const FOOTER_COLUMNS = [
  {
    title: 'Browse',
    links: ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'],
  },
  {
    title: 'Categories',
    links: ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'],
  },
  {
    title: 'Platform',
    links: ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'],
  },
];

export const LEGAL_LINKS = ['Privacy Policy', 'Terms of Service', 'Cookies Settings'];
