import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { SearchIcon } from '../ui/icons';
import { ROUTES, searchUrl } from '../../utils/routes';
import { cn } from '../../utils/cn';

/**
 * Hero search. There is no search results page in the design, so submitting
 * takes the visitor to the course section with their query in the URL
 * (e.g. /?q=figma#courses), where the course list filters by title.
 */
export default function SearchBar({ className }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const q = query.trim();
    navigate(q ? searchUrl(q) : ROUTES.courses);
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={cn(
        'flex w-full max-w-[580px] flex-col gap-3 sm:flex-row sm:gap-[15px]',
        className,
      )}
    >
      <div className="relative flex-1 sm:max-w-[461px]">
        <label htmlFor="hero-search" className="sr-only">
          Search courses
        </label>
        <SearchIcon className="pointer-events-none absolute left-[27px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-ink-muted" />
        <input
          id="hero-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Course, topic, creator"
          className="h-[52px] w-full rounded-3xl bg-white pl-[56px] pr-5 text-lg text-ink outline-none placeholder:text-ink-muted"
        />
      </div>
      <Button type="submit" className="sm:w-[104px]">
        Search
      </Button>
    </form>
  );
}
