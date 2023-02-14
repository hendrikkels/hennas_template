import { verify } from 'jsonwebtoken'
import { createAccessToken, sendRefreshToken, createRefreshToken } from '@/utils/auth'
import cookie from 'cookie'
import prisma from '../../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'


export default async function refresh_token(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        console.log('running refresh token');
        if (!req.headers.cookie) return res.send({ ok: false, accessToken: '' });
        console.log('Has Cookie')
        const getToken = cookie.parse(req.headers.cookie);
        console.log(JSON.stringify(getToken, null, 2));
        const token = getToken.refreshToken;

        console.log('no token');

        if (!token) return res.send({ ok: false, accessToken: '' });

        console.log('has token');
        let payload = null;

        if (!process.env.REFRESH_TOKEN_SECRET) {
            console.error('No value for REFRESH_TOKEN_SECRET found')
            return res.send({ ok: false, accessToken: '' });
        }

        console.log('before try')

        try {
            payload = verify(token, process.env.REFRESH_TOKEN_SECRET)

            console.log(payload);
            if (typeof payload === 'string' || payload instanceof String) {
                return res.send({ ok: false, accessToken: '' });
            }

            const user = await prisma.user.findUnique({
                where: {
                    id: payload.userId
                },
                select: {
                    id: true,
                    email: true
                }
            })

            if (!user) return res.send({ ok: false, accessToken: '' })

            const newRefreshToken = createRefreshToken(user);

            if (newRefreshToken) sendRefreshToken(res, newRefreshToken);
            const accessToken = createAccessToken(user);

            return res.send({ ok: true, accessToken, user });
        } catch (e) {
            console.log(e)
            return res.send({ ok: false, accessToken: '' })
        }

    } else {
        res.status(500).send({ ok: false })
    }
}