import nextConnect from 'next-connect';

import { nextConnectConfig } from '@/server/config';
import { authService } from '@/server/services';

import type { NextApiRequest, NextApiResponse } from 'next';

const apiRoute = nextConnect(nextConnectConfig).post(
  (req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req;

    const user = authService.login(body.username, body.password);
    res.status(200).json(user);
  },
);

export default apiRoute;

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { body } = req;

//   if (req.method !== 'POST') {
//     return res.status(405).json('Wrong method');
//   }

//   try {
//     const user = authService.login(body.username, body.password);
//     res.status(200).json(user);
//   } catch (error) {
//     if (error instanceof authError) {
//       return res.status(error.status).json({ message: error.message });
//     }
//     return res.status(500).json('Ooops! Something went wrong');
//   }
// }
