import { getUserProfile } from '@/controllers/profile';

import type { NextApiRequest, NextApiResponse } from 'next';
import checkAuth from '../../middleware/checkAuth';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const userId = Number(req.query.userId);
    const userProfile = await getUserProfile(userId);
    if (userProfile) {
      res.status(200).json(userProfile);
    } else {
      res.status(404).json(null);
    }
  } catch (e) {
    res.status(400).json(null);
    throw e;
  }
}

export default checkAuth(handler);