// External dependencies
import { createUseStyles } from 'react-jss';

const COLORS = ['#0095DB', '#00913D', '#87BA33', '#FFC231', '#DA572C'];

const useStyles = createUseStyles({
  title: {
    fontWeight: 'bold',
    fontSize: '22px',
    margin: 0,
    padding: 0,
    marginBottom: '90px',
  },
  scaleOuterContainer: {
    position: 'relative',
  },
  pointerIndicator: {
    top: 0,
    width: '60px',
    position: 'absolute',
    transform: 'translate(-100%, -100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  percentage: {
    fontWeight: 200,
    fontSize: '18px',
    marginBottom: '8px',
    textAlign: 'center',
  },
  pointerIndicatorIcon: {
    width: 0,
    height: 0,
    borderLeft: '12px solid transparent',
    borderRight: '12px solid transparent',
    borderTop: '25px solid #ffffff',
    marginBottom: '8px',
  },
  scaleContainer: {
    height: '80px',
    width: '100%',
    background: `linear-gradient(90deg,${COLORS.join(',')} 84%)`,
    borderRadius: '8px',
  },
  indicatorContainer: {
    display: 'flex',
    width: 'fit-content',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '16px',
  },
  indicators: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    '& > div': {
      position: 'absolute',
      transform: 'translateX(-100%)',
    },
    '& > div:nth-child(1)': {
      left: '2%',
      transform: 'translateX(0%)',
      '& > div': {
        backgroundColor: COLORS[0],
      },
    },
    '& > div:nth-child(2)': {
      left: '33%',
      '& > div': {
        backgroundColor: COLORS[1],
      },
    },
    '& > div:nth-child(3)': {
      left: '49%',
      '& > div': {
        backgroundColor: COLORS[2],
      },
    },
    '& > div:nth-child(4)': {
      left: '68%',
      '& > div': {
        backgroundColor: COLORS[3],
      },
    },
    '& > div:nth-child(5)': {
      left: '86%',
      '& > div': {
        backgroundColor: COLORS[4],
      },
    },
  },
  indicatorColor: {
    width: '15px',
    height: '15px',
    borderWidth: '1px',
    borderColor: 'white',
    borderStyle: 'solid',
    borderRadius: '30%',
  },
  indicatorPercentage: {
    fontSize: '14px',
    fontWeight: 'bold',
    margin: '8px 0',
  },
  indicatorText: {
    margin: 0,
    marginTop: 8,
    padding: 0,
    fontSize: '12px',
    fontWeight: '200',
  },
});

export default useStyles;
