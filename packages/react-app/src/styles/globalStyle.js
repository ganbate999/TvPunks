// 1. GlobalStyles.js
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '@font-face': {
        fontFamily: 'sammie',
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%',
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit'
      },
      body: {
        height: '100%',
        width: '100%'
      },
      '#root': {
        height: '100%',
        width: '100%'
      }
    }
  })
);


const GlobalStyles = () => {
    useStyles();

  return null;
};

export default GlobalStyles;

function sammie(sammie: any): string | undefined {
  throw new Error('Function not implemented.');
}
