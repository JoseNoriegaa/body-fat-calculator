// External dependencies
import { createUseStyles } from 'react-jss';

// Internal dependencies
import breakpoints from '@/utilities/breakpoints';

const useStyles = createUseStyles({
  container: {
    margin: '0 auto',
    maxWidth: breakpoints.get('xl'),
    padding: '0 24px',
  },
});

export default useStyles;
