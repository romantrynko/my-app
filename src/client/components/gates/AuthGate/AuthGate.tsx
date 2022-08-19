import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { AuthAccessLevel } from '@/client/types';
import { createLocalStorage } from '@/client/utils/storage';

import type { IAuthInitialProps } from '@/client/types';
import type { PropsWithChildren } from 'react';

const AuthGate = ({ children, auth }: PropsWithChildren<{ auth: IAuthInitialProps }>) => {
  const user = createLocalStorage().getItem('user');
  const router = useRouter();

  useEffect(() => {
    if (auth?.accessLevel === AuthAccessLevel.Unauthorized) {
      if (!user) {
        router.push('/login');
      }
    }

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
  }, [auth?.accessLevel, router, user]);

  return <>{children}</>;
};

export default AuthGate;
