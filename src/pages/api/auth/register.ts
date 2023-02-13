import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();
import type { NextApiRequest, NextApiResponse } from 'next'

type User = Prisma.userGetPayload<{}>;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User | null>
) {
    console.log(req.body);
    const body = JSON.parse(req.body);
    try {
        const id = Number(req.query.id);
        const user = await prisma.user.create({ data: body });
        res.status(200).json(user);
    } catch (e) {
        res.status(Number(400)).json(null);
        throw e;
    }
}
