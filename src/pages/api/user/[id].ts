import { getUser } from '@/controllers/user'

import type { NextApiRequest, NextApiResponse } from 'next';
import checkAuth from '../middleware/checkAuth';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const id = Number(req.query.id);
    const user = await getUser(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json(null);
    }
  } catch (e) {
    res.status(400).json(null);
    throw e;
  }
}

export default checkAuth(handler);
