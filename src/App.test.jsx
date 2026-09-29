import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRouter } from './test/renderWithRouter';

describe('App routes', () => {
  it('renders the landing page with every section', () => {
    renderWithRouter(<App />);
    [
      'Get Access to Hundreds Courses Available',
      /Discover Your Passion/,
      'Explore Diverse Learning Paths at Bytespace',
      'Your Path to Professional Growth Starts Here!',
      'Create & Manage Courses Easily.',
      'Unlock Your Potential as a Creator with ByteSpace',
      'Discover What Our Community Is Saying',
    ].forEach((name) => expect(screen.getByRole('heading', { name })).toBeInTheDocument());
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('has exactly one h1 on the landing page', () => {
    renderWithRouter(<App />);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('renders the sign in page', () => {
    renderWithRouter(<App />, { route: '/signin' });
    expect(screen.getByRole('heading', { name: 'Welcome Back' })).toBeInTheDocument();
  });

  it('renders the sign up page', () => {
    renderWithRouter(<App />, { route: '/signup' });
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome to ByteSpace');
  });

  it('shows the 404 page for unknown URLs', () => {
    renderWithRouter(<App />, { route: '/this-page-does-not-exist' });
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'The page you are looking for doesn’t exist',
    );
    expect(screen.getByRole('link', { name: 'Back to Home' })).toHaveAttribute('href', '/');
  });

  it('searches from the hero and shows the results', async () => {
    const { user } = renderWithRouter(<App />);
    await user.type(screen.getByRole('searchbox', { name: 'Search courses' }), 'big data');
    await user.click(screen.getByRole('button', { name: 'Search' }));
    expect(screen.getByText(/1 result for/)).toBeInTheDocument();
  });
});
