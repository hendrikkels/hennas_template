import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();
import type { NextApiRequest, NextApiResponse } from 'next';

type User = Prisma.usersGetPayload<{}> | null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  try {
    const id = Number(req.query.id);
    const users = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });
    console.log(users);
    res.status(200).json(users);
  } catch (e) {
    res.status(Number(400)).json(null);
    throw e;
  }
}
