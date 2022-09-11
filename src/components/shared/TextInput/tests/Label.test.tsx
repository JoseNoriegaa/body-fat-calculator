// External dependencies
import { render, screen } from '@testing-library/react';

// Internal dependencies
import Label from '../Label';

describe('<Label />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Label htmlFor="some_input">form field</Label>);

    const element = screen.getByText('form field');
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('for', 'some_input');
    expect(asFragment()).toMatchSnapshot();
  });
});
