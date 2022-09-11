// External dependencies
import React from 'react';
import { render, screen } from '@testing-library/react';

// Internal dependencies
import Header from '../Header';

// Mocks
jest.mock('../../Container', () => ({
  __esModule: true,
  default: ({ children }: React.PropsWithChildren<unknown>) => <div>{children}</div>,
}));

describe('<Header />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Header />);

    expect(screen.getByText('Health Overview')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
