// External dependencies
import { render, screen } from '@testing-library/react';

// Internal dependencies
import Container from '../Container';

describe('<Container />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Container>
        <span>children</span>
      </Container>
    );

    expect(screen.getByText('children')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
