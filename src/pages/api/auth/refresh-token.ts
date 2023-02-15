import { verify } from 'jsonwebtoken'
import { createAccessToken, sendRefreshToken, createRefreshToken } from '@/utils/auth'
import cookie from 'cookie'
import prisma from '../../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { getUserById } from '@/services/auth.service'

//TODO: Possibly fix api routes
export default async function refresh_token(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        console.log('running refresh token');
        if (!req.headers.cookie) return res.status(400).json({ ok: false, accessToken: '' });
        console.log('Has Cookie')
        const getToken = cookie.parse(req.headers.cookie);
        console.log(JSON.stringify(getToken, null, 2));
        const token = getToken.refreshToken;

        console.log('no token');

        if (!token) return res.status(400).json({ ok: false, accessToken: '' });

        console.log('has token');
        let payload = null;

        if (!process.env.REFRESH_TOKEN_SECRET) {
            console.error('No value for REFRESH_TOKEN_SECRET found')
            return res.status(400).json({ ok: false, accessToken: '' });
        }

        console.log('before try')

        try {
            payload = verify(token, process.env.REFRESH_TOKEN_SECRET)

            console.log(payload);
            if (typeof payload === 'string' || payload instanceof String) {
                return res.status(400).json({ ok: false, accessToken: '' });
            }

            const user = await getUserById(payload.userId);

            if (!user) return res.status(400).json({ ok: false, accessToken: '' });

            const newRefreshToken = createRefreshToken(user);

            if (newRefreshToken) sendRefreshToken(res, newRefreshToken);
            const accessToken = createAccessToken(user);

            return res.status(200).json({ ok: true, accessToken, user });
        } catch (e) {
            console.log(e)
            return res.status(400).json({ ok: false, accessToken: '' })
        }

    } else {
        res.status(500).json({ ok: false })
    }
}