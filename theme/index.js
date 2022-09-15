import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#009388',
    },
    secondary: {
      main: '#19857b',
    },
    light: {
      main: '#ffffff'
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
