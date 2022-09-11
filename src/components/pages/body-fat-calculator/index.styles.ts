// External dependencies
import { createUseStyles } from 'react-jss';
import breakpoints from '@/utilities/breakpoints';

const useStyles = createUseStyles({
  container: {
    paddingTop: '24px',
    paddingBottom: '150px',
    display: 'flex',
    flexDirection: 'column',
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: '100px',
      paddingBottom: '24px',
    },
  },
  formContainer: {
    flex: 1,
    [breakpoints.up('md')]: {
      paddingRight: '10%',
    },
  },
  resultContainer: {
    flex: 1,
  },
  mobileDivider: {
    width: '100%',
    height: '1px',
    backgroundColor: 'white',
    margin: '24px 0',
    [breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

export default useStyles;
