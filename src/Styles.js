import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
  },
  header: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '40px',
    textShadow: '4px 4px 12px rgba(0, 0, 0, 0.2)',
    letterSpacing: '2px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    marginBottom: '60px',
  },
  blueButton: {
    backgroundColor: '#1976d2 !important',
    color: 'black !important',
    padding: '25px 50px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    borderRadius: '50px',
    boxShadow: '0 8px 30px rgba(25, 118, 210, 0.7)',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    '&:active': {
      transform: 'scale(1.05)',
    },
  },
  greenButton: {
    backgroundColor: '#2e7d32 !important',
    color: 'black !important',
    padding: '25px 50px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    borderRadius: '50px',
    boxShadow: '0 8px 30px rgba(46, 125, 50, 0.7)',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    '&:active': {
      transform: 'scale(1.05)',
    },
  },
  redButton: {
    backgroundColor: '#d32f2f !important',
    color: 'black !important',
    padding: '25px 50px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    borderRadius: '50px',
    boxShadow: '0 8px 30px rgba(211, 47, 47, 0.7)',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    '&:active': {
      transform: 'scale(1.05)',
    },
  },
  yellowButton: {
    backgroundColor: '#fbc02d !important',
    color: 'black !important',
    padding: '25px 50px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    borderRadius: '50px',
    boxShadow: '0 8px 30px rgba(251, 192, 45, 0.7)',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    '&:active': {
      transform: 'scale(1.05)',
    },
  },
  purpleButton: {
    backgroundColor: '#7b1fa2 !important',
    color: 'black !important',
    padding: '25px 50px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    borderRadius: '50px',
    boxShadow: '0 8px 30px rgba(123, 31, 162, 0.7)',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    '&:active': {
      transform: 'scale(1.05)',
    },
  },
  footer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    fontSize: '1.2rem',
    color: '#333',
    fontStyle: 'italic',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
  },
});

export default useStyles;
