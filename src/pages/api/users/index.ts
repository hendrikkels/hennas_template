import { PrismaClient, Prisma } from '@prisma/client';
import { getAllUsers } from '@/services';

const prisma = new PrismaClient();
import type { NextApiRequest, NextApiResponse } from 'next'

type User = Prisma.userGetPayload<{}>[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | null>
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
