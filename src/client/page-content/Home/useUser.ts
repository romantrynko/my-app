import { useContext, useEffect, useState } from 'react';

import UserContext from '@/client/components/gates/AuthGate/AuthGateContext';
import { createLocalStorage } from '@/client/utils/storage';

import type { IUseUserProps } from './types';

const useUser = () => {
  const [user, setUser] = useState<IUseUserProps | null>(null);
  const [userFromContext, setUserFromContext] = useContext(UserContext);

  console.log('state', user);

  useEffect(() => {
    const data: IUseUserProps = createLocalStorage().getItem('user');
    setUser(data);
  }, [userFromContext]);

  const removeUser = () => {
    setUser(null);
    // setUserFromContext(null);
  };

  return { user, removeUser };
};

export default useUser;
