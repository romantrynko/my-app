import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import AuthGate from '@/client/components/gates/AuthGate';
import UserContext from '@/client/components/gates/AuthGate/AuthGateContext';
import { theme } from '@/client/constants';
import useUser from '@/client/page-content/Home/useUser';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps: { auth, ...restPageProps } }: AppProps) {
  const { user } = useUser();

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={user || null}>
        <AuthGate auth={auth}>
          <CssBaseline />
          <Component {...restPageProps} />
        </AuthGate>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
