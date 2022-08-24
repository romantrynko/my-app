import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useState } from 'react';

import AuthGate from '@/client/components/gates/AuthGate';
import UserContext, { initialContext } from '@/client/components/gates/AuthGate/AuthGateContext';
import { theme } from '@/client/constants';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps: { auth, ...restPageProps } }: AppProps) {
  const [user, setUser] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={[user, setUser]}>
        <AuthGate auth={auth}>
          <CssBaseline />
          <Component {...restPageProps} />
        </AuthGate>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
