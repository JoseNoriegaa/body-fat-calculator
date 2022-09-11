// External dependencies
import { render, screen } from '@testing-library/react';

// Internal dependencies
import BodyFatScale from '../BodyFatScale';

describe('<BodyFatScale />', () => {
  it.each(['male', 'female'])('should match snapshot - male', (gender) => {
    const { asFragment } = render(
      <BodyFatScale isMale={gender === 'male'} bodyFatPercentage={20} />
    );

    expect(screen.getByText('Tu resultado: 20.0%')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
