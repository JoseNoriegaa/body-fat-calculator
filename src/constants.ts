const BREAK_POINTS = Object.freeze({
  xs: '0px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1536px',
} as const);

const BODY_FAT_CATEGORIES = Object.freeze({
  MALE: [
    {
      value: '2-4%',
      description: 'Esencial',
    },
    {
      value: '6-13%',
      description: 'Deportista',
    },
    {
      value: '14-17%',
      description: 'Fitness',
    },
    {
      value: '18-25%',
      description: 'Aceptable',
    },
    {
      value: '25%',
      description: 'Obeso',
    },
  ],
  FEMALE: [
    {
      value: '10-13%',
      description: 'Esencial',
    },
    {
      value: '14-20%',
      description: 'Deportista',
    },
    {
      value: '21-24%',
      description: 'Fitness',
    },
    {
      value: '25-31%',
      description: 'Aceptable',
    },
    {
      value: '32%',
      description: 'Obeso',
    },
  ],
} as const);

export { BREAK_POINTS, BODY_FAT_CATEGORIES };
