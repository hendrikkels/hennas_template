import { verify } from 'jsonwebtoken';
import { createAccessToken, sendRefreshToken, createRefreshToken } from '@/utils/jwt';
import cookie from 'cookie';
import prisma from '../../../utils/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getUserById } from '@/controllers/user';

//TODO: Possibly fix api routes
export default async function refreshToken(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        if (!req.headers.cookie) return res.status(401).send('Invalid cookie');
        const getToken = cookie.parse(req.headers.cookie);
        const token = getToken.refreshToken;

        if (!token) return res.status(401).send('Token invalid');

        let payload = null;

        if (!process.env.REFRESH_TOKEN_SECRET) {
            return res.status(401).send('Secret Invalid');
        }

        try {
            payload = verify(token, process.env.REFRESH_TOKEN_SECRET);

            if (typeof payload === 'string' || payload instanceof String) {
                return res.status(401).send('Token invalid');
            }

            const user = await getUserById(payload.userId);

            if (!user) return res.status(401).send('Unauthorised');

            const newRefreshToken = createRefreshToken(user);

            if (newRefreshToken) sendRefreshToken(res, newRefreshToken);
            const accessToken = createAccessToken(user);

            return res.status(200).json({ ok: true, accessToken: accessToken, user });
        } catch (err) {
            console.log(err);
            return res.status(401).send('Unauthorised');
        }

    } else {
        res.status(500).json({ ok: false });
    }
}