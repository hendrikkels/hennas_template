import { getAllUsers } from '@/services/UserService';

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const users = await getAllUsers();
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(404).json(users);
    }
  } catch (e) {
    res.status(Number(400)).json(null);
    throw e;
  }
}
