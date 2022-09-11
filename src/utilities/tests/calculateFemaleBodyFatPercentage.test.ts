// Internal dependencies
import calculateFemaleBodyFatPercentage from '../calculateFemaleBodyFatPercentage';

describe('calculateFemaleBodyFatPercentage', () => {
  it('should return the body fat percentage', () => {
    const percentage = calculateFemaleBodyFatPercentage(170, 55, 68, 86, 30);

    expect(percentage.toFixed(2)).toBe('56.25');
  });
});
