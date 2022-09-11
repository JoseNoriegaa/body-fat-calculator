// Internal dependencies
import calculateMaleBodyFatPercentage from '../calculateMaleBodyFatPercentage';

describe('calculateMaleBodyFatPercentage', () => {
  it('should return the body fat percentage', () => {
    const percentage = calculateMaleBodyFatPercentage(170, 55, 68, 30);

    expect(percentage.toFixed(2)).toBe('10.14');
  });
});
