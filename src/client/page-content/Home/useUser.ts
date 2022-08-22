import { useEffect, useState } from 'react';

import { createLocalStorage } from '@/client/utils/storage';

import type { IUseUserProps } from './types';

const useUser = () => {
  const [user, setUser] = useState<IUseUserProps | null>(null);

  console.log('state', user);

  useEffect(() => {
    const data: IUseUserProps = createLocalStorage().getItem('user');
    setUser(data);
  }, []);

  const removeUser = () => {
    setUser(null);
  };

  return { user, removeUser };
};

export default useUser;
