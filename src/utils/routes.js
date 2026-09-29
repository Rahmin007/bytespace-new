/** Single source of truth for every URL in the app. */
export const ROUTES = {
  home: '/',
  signIn: '/signin',
  signUp: '/signup',
  courses: '/#courses',
  categories: '/#categories',
  creators: '/#creators',
};

/** Landing page URL that opens the course list on a topic, e.g. /?topic=Marketing#courses */
export const topicUrl = (topic) => `/?topic=${encodeURIComponent(topic)}#courses`;

/** Landing page URL that searches the course list, e.g. /?q=figma#courses */
export const searchUrl = (query) => `/?q=${encodeURIComponent(query)}#courses`;
