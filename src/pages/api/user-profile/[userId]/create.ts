import { createUserProfile, getUserProfile } from '@/controllers/profile';
import { getUserById } from '@/controllers/user';

import type { NextApiRequest, NextApiResponse } from 'next';
import isAuthenticated from '../../middleware/isAuthenticated';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const userId = Number(req.query.userId);
    if (!userId) return res.status(403).json({ error: `Invalid user` });
    const user = await getUserById(userId);
    if (!user) {
      return res.status(403).json({ error: `Invalid user` });
    }
    const profile = await createUserProfile(user.id);
    if (profile) {
      res.status(200).json({ ...user, profile: profile });
    } else {
      res.status(404).json(null);
    }
  } catch (e) {
    res.status(400).json(null);
    throw e;
  }
}

export default isAuthenticated(handler);