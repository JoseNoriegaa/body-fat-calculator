// External dependencies
import { render, screen } from '@testing-library/react';

// Internal dependencies
import ErrorText from '../ErrorText';

describe('<ErrorText />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <ErrorText>
        <span>error text</span>
      </ErrorText>
    );

    expect(screen.getByText('error text')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
