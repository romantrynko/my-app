import { createContext } from 'react';

import type { IUserResponse } from '@/server/types';

export const initialContext = [null, () => {}];

type IUserContext = {
  user: IUserResponse;
  setUser: () => void;
};

const UserContext = createContext<IUserContext>(initialContext);

export default UserContext;
