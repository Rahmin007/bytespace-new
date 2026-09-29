import { screen } from '@testing-library/react';
import Navbar from './Navbar';
import { renderWithRouter } from '../../test/renderWithRouter';

describe('Navbar', () => {
  it('links to every main page', () => {
    renderWithRouter(<Navbar />);
    const nav = screen.getByRole('navigation', { name: 'Main' });
    expect(nav).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Courses' })).toHaveAttribute('href', '/#courses');
    expect(screen.getByRole('link', { name: 'Creators' })).toHaveAttribute('href', '/#creators');
    expect(screen.getByRole('link', { name: 'Sign In' })).toHaveAttribute('href', '/signin');
    expect(screen.getByRole('link', { name: 'Join Us' })).toHaveAttribute('href', '/signup');
  });

  it('marks the current page', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Courses' })).not.toHaveAttribute('aria-current');
  });

  it('opens and closes the mobile menu', async () => {
    const { user } = renderWithRouter(<Navbar />);
    const toggle = screen.getByRole('button', { name: 'Open menu' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggle);
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    expect(document.getElementById('mobile-menu')).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(document.getElementById('mobile-menu')).not.toBeInTheDocument();
  });
});
