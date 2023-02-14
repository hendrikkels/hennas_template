import { PrismaClient, Prisma } from '@prisma/client';
import { getUserById } from '@/services'

import type { NextApiRequest, NextApiResponse } from 'next';

type User = Prisma.userGetPayload<{}> | null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  try {
    const id = Number(req.query.id);
    const user = await getUserById(id);
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
