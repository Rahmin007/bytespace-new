import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

/** Renders a component inside a router at the given URL and returns a userEvent instance. */
export function renderWithRouter(ui, { route = '/', userOptions } = {}) {
  const user = userEvent.setup(userOptions);
  return {
    user,
    ...render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>),
  };
}
