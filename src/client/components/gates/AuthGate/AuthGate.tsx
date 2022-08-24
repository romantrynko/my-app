import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

import { AuthAccessLevel } from '@/client/types';

import UserContext from './AuthGateContext';

import type { IAuthInitialProps } from '@/client/types';
import type { PropsWithChildren } from 'react';

const AuthGate = ({ children, auth }: PropsWithChildren<{ auth: IAuthInitialProps }>) => {
  const [user] = useContext(UserContext);
  const router = useRouter();

  console.log('authGate', auth?.accessLevel, user);

  useEffect(() => {
    if (auth?.accessLevel === AuthAccessLevel.Authorized) {
      if (!user) {
        router.push('/login');
      }
    }

    if (auth?.accessLevel === AuthAccessLevel.Unauthorized) {
      if (user) {
        router.push('/');
      }
    }
  }, [auth, router, user]);

  return <>{children}</>;
};

export default AuthGate;
