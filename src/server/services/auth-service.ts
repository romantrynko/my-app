import { users } from '@/server/constants';

import { authError } from './exceptions';

const login = (username: string, password: string) => {
  const user = users.find((item) => item.username === username && item.password === password);

  if (!user) {
    throw new authError('Invalid username or password');
  }

  return user;
};

const authService = { login };

export default authService;
