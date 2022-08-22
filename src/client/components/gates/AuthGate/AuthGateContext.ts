import { createContext } from 'react';

import type { IUserResponse } from '@/server/types';

const UserContext = createContext<IUserResponse | null>(null);

export default UserContext;
