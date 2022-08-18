import nextConnect from 'next-connect';

import { nextConnectConfig } from '@/server/config';
import { authService } from '@/server/services';
import { loginSchema } from '@/server/validations';

import { UserResponse } from './../../../src/server/responses/index';

import type { IUserResponse } from './../../../src/server/types/index';
import type { NextApiRequest, NextApiResponse } from 'next';

const apiRoute = nextConnect(nextConnectConfig).post(
  async (req: NextApiRequest, res: NextApiResponse<IUserResponse>) => {
    const { body } = req;

    const { username, password } = await loginSchema.validate(body);

    const user = authService.login(username, password);
    res.status(200).json(UserResponse(user));
  },
);

export default apiRoute;
