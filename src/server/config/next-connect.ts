import { ClientError } from '../services/exceptions';

import type { NextApiRequest, NextApiResponse } from 'next';
import type { Options } from 'next-connect';

const nextConnectConfig: Options<NextApiRequest, NextApiResponse> = {
  onError: (err: Error, req: NextApiRequest, res: NextApiResponse) => {
    if (err instanceof ClientError) {
      return res.status(err.status).end(err.message);
    }
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
    console.log('No match');
    res.status(405).end(`Method ${req.method} is not allowed`);
  },
};

export default nextConnectConfig;