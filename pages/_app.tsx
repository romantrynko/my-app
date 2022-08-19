import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import AuthGate from '@/client/components/gates/AuthGate';
import { theme } from '@/client/constants';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps: { auth, ...restPageProps } }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthGate auth={auth}>
        <CssBaseline />
        <Component {...restPageProps} />
      </AuthGate>
    </ThemeProvider>
  );
}

export default MyApp;
