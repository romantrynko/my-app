import { useRouter } from 'next/router';

import { AuthAccessLevel } from '@/client/types';
import { createLocalStorage } from '@/client/utils/storage';

import type { IAuthInitialProps } from '@/client/types';
import type { PropsWithChildren } from 'react';

const AuthGate = ({ children, auth }: PropsWithChildren<{ auth: IAuthInitialProps }>) => {
  const router = useRouter();
  const user = createLocalStorage().getItem('user');

  if (auth?.accessLevel === AuthAccessLevel.Unauthorized) {
    if (user) {
      router.push('/');
    }
  }

  if (auth?.accessLevel === AuthAccessLevel.Authorized) {
    if (!user) {
      router.push('/login');
    }
  }
  return <>{children}</>;
};

export default AuthGate;
