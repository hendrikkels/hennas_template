import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();
import type { NextApiRequest, NextApiResponse } from 'next'

type User = Prisma.usersGetPayload<{}>[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const users = await prisma.users.findMany();
  console.log(users);
  res.status(200).json(users)
}
