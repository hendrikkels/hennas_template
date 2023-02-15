import { createUserProfile, getUserProfile } from '@/services/profile.service';
import { getUserById } from '@/services/user.service';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log('route hit');
    const userId = Number(req.query.userId);
    if (!userId) return res.status(403).json({ error: `Invalid user` });
    const user = await getUserById(userId);
    if (!user) {
      return res.status(403).json({ error: `Invalid user` });
    }
    console.log('user Found');
    const profile = await createUserProfile(user.id);
    console.log({ ...user, profile: profile });
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