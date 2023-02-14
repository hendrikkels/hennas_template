import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();
import type { NextApiRequest, NextApiResponse } from 'next'

type User = Prisma.userGetPayload<{}>[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | null>
) {
  try {
    const id = Number(req.query.id);
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (e) {
    res.status(Number(400)).json(null);
    throw e;
  }
}
