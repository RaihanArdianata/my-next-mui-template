import * as React from 'react';
import '../styles/globals.css';
import 'pannellum-react/es/pannellum/css/pannellum.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'theme';
import { wrapper } from 'store';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
