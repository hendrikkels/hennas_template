import { createUserProfile, getUserProfile, updateUserProfile } from '@/controllers/profile';
import { getUserById } from '@/controllers/user';

import type { NextApiRequest, NextApiResponse } from 'next';
import isAuthenticated from '@/pages/api/middleware/isAuthenticated';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const userId = Number(req.query.userId);

    //Convert body to JSON
    const body = req.body;

    //Check if all fields are present (TODO: replace with zod)
    if (!body.id || !body.name || !body.surname || !body.bio) {
      return res.status(400).send('Invalid Credentials');
    }

    const profile = await updateUserProfile(body.id, {
      name: body.name,
      surname: body.surname,
      bio: body.bio,
    });

    if (profile) {
      const userProfile = await getUserProfile(userId);
      res.status(200).json(userProfile);
    } else {
      res.status(404).json(null);
    }
  } catch (e) {
    res.status(400).json(null);
    throw e;
  }
}

export default isAuthenticated(handler);