const calculateMaleBodyFatPercentage = (
  height: number,
  weight: number,
  waist: number,
  neck: number
) => {
  const divided = 495;
  const divisor = 1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height);
  const bodyFatPercentage = divided / divisor - 450;
  return bodyFatPercentage;
};

export default calculateMaleBodyFatPercentage;
