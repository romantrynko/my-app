import { users } from '@/server/constants';

import { ClientError } from './exceptions';

const login = (username: string, password: string) => {
  const user = users.find((item) => item.username === username && item.password === password);

  if (!user) {
    throw new ClientError('Invalid username or password');
  }

  return user;
};

const authService = { login };

export default authService;
