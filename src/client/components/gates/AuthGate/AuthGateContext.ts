import { createContext } from 'react';

import type { IUserResponse } from '@/server/types';

export const initialContext = [null, (user: IUserResponse) => user];

const UserContext = createContext(initialContext);

export default UserContext;
