import { screen, within } from '@testing-library/react';
import DiscoverCourses from './DiscoverCourses';
import { renderWithRouter } from '../../test/renderWithRouter';

const courseTitles = () =>
  screen.queryAllByRole('heading', { level: 3 }).map((heading) => heading.textContent);

describe('DiscoverCourses', () => {
  it('shows the six featured courses by default', () => {
    renderWithRouter(<DiscoverCourses />);
    expect(screen.getByRole('button', { name: 'Featured' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(courseTitles()).toHaveLength(6);
  });

  it('filters the list when a topic is chosen', async () => {
    const { user } = renderWithRouter(<DiscoverCourses />);
    await user.click(screen.getByRole('button', { name: 'Data Science' }));
    expect(screen.getByRole('button', { name: 'Data Science' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(courseTitles()).toEqual(['the Power of Big Data']);
  });

  it('shows a helpful empty state and a way back', async () => {
    const { user } = renderWithRouter(<DiscoverCourses />);
    await user.click(screen.getByRole('button', { name: 'Cooking' }));
    expect(screen.getByText('No Cooking courses yet')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Show featured courses' }));
    expect(courseTitles()).toHaveLength(6);
  });

  it('opens on the topic given in the URL', () => {
    renderWithRouter(<DiscoverCourses />, { route: '/?topic=Productivity' });
    expect(courseTitles()).toEqual(['Balancing Productivity and Self-Care']);
  });

  it('shows search results from the URL and can clear them', async () => {
    const { user } = renderWithRouter(<DiscoverCourses />, { route: '/?q=money' });
    expect(screen.getByText(/1 result for/)).toBeInTheDocument();
    expect(courseTitles()).toEqual(['Mastering Money Management']);
    await user.click(screen.getByRole('button', { name: 'Clear search' }));
    expect(courseTitles()).toHaveLength(6);
  });

  it('reveals extra topics with "+ More"', async () => {
    const { user } = renderWithRouter(<DiscoverCourses />);
    const group = within(screen.getByRole('group', { name: 'Filter courses by topic' }));
    expect(group.queryByRole('button', { name: 'Writing' })).not.toBeInTheDocument();
    await user.click(group.getByRole('button', { name: '+ More' }));
    expect(group.getByRole('button', { name: 'Writing' })).toBeInTheDocument();
    expect(group.getByRole('button', { name: '− Less' })).toHaveAttribute('aria-expanded', 'true');
  });
});
