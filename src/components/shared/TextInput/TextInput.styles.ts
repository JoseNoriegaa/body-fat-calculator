// External dependencies
import { createUseStyles } from 'react-jss';

// Internal dependencies

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  input: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgba(255,255,255, 0.3)',
    height: '30px',
    borderRadius: '30px',
    backgroundColor: 'unset',
    padding: '0 15px',
    verticalAlign: 'middle',
    color: 'unset',
    transition: 'border-color .2s ease-out',
    '&:focus-visible': {
      outline: 'none',
      borderColor: 'rgba(255,255,255, .5)',
      backgroundColor: 'rgba(255,255,255,0.05)',
    },
  },
  inputError: {
    borderColor: 'red',
    '&:focus-visible': {
      borderColor: 'red',
    },
  },
  errorContainer: {
    position: 'absolute',

    bottom: '-4px',
    transform: 'translateY(100%)',
  },
});

export default useStyles;
