import { sign } from 'jsonwebtoken';
import cookie from 'cookie';
import { NextApiResponse } from 'next';

export const refreshToken = () => {
    return fetch('/api/refresh-token', {
        method: "POST",
        credentials: "include"
    }).then(res => res.ok && res.json())
        .then(data => { return data })
}

//TODO: Fix Types
export const createAccessToken = (user: any) => {
    if (process.env.ACCESS_TOKEN_SECRET) {
        return sign(
            { userId: user.id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' });
    } else {
        console.error('No value for ACCESS_TOKEN_SECRET found')
        return null;
    }
};

//TODO: Fix Types
export const createRefreshToken = (user: any) => {
    if (process.env.REFRESH_TOKEN_SECRET) {
        return sign(
            { userId: user.id },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "7d" }
        );
    } else {
        console.error('No value for REFRESH_TOKEN_SECRET found')
        return null;
    }
};

export const sendRefreshToken = (res: NextApiResponse, token: string) => {
    res.setHeader('Set-Cookie', cookie.serialize('refreshToken', token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
    }))
};