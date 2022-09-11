// External dependencies
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    backgroundColor: '#7F5DE8',
    height: '60px',
  },
  container: {
    height: 'inherit',
  },
  content: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  headerTitle: {
    margin: '0 0 0 16px',
    padding: 0,
    fontWeight: 300,
    fontSize: '18px',
  },
  buttonContainer: {
    marginLeft: 'auto',
  },
  button: {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative',
    transition: 'background-color .3s',
    '&:hover': {
      backgroundColor: 'rgba(236, 240, 241, .3)',
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      width: 0,
      paddingTop: 0,
      borderRadius: '100%',
      backgroundColor: 'rgba(236, 240, 241, .3)',
    },
    '&:active:before': {
      width: '120%',
      paddingTop: '120%',
      transition: 'width .2s ease-out, padding-top .2s ease-out',
    },
    '& > div': {
      width: '25px',
      height: '2px',
      backgroundColor: 'white',
      '&:nth-child(2)': {
        margin: '4px 0',
      },
    },
  },
});

export default useStyles;
