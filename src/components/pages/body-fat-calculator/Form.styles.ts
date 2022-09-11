// External dependencies
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  title: {
    fontWeight: '500',
    fontSize: '40px',
    margin: 0,
    padding: 0,
  },
  description: {
    fontWeight: '100',
    fontSize: '14px',
    color: '#B5B5B5',
    margin: '24px 0',
    padding: 0,
  },
  inputContainer: {
    marginBottom: '16px',
  },
  groupRadio: {
    display: 'flex',
    flexDirection: 'row',
    margin: '8px 0 4px',
    position: 'relative',
  },
  groupRadioError: {
    position: 'absolute',
    bottom: '-4px',
    left: 0,
    transform: 'translateY(100%)',
  },
  radioContainer: {
    '& > input[type="radio"]': {
      padding: 0,
      margin: 0,
      marginRight: '8px',
    },
    '&:nth-child(even)': {
      marginLeft: '24px',
    },
  },
  actionsContainer: {
    marginTop: '24px',
  },
  btn: {
    fontSize: '14px',
    fontWeight: 400,
    height: '35px',
    padding: '0 20px',
    borderRadius: '20px',
    cursor: 'pointer',
  },
  btnSubmit: {
    backgroundColor: '#7F5DE8',
    '&:hover': {
      filter: 'contrast(1.2)',
    },
    '&:active': {
      backgroundColor: '#6240ca',
    },
  },
  btnClear: {
    marginLeft: '8px',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&:active': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
});

export default useStyles;
