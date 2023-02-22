
import { getUserById } from '@/controllers/user';
import jwt from 'jsonwebtoken';
import { NextApiRequest } from 'next';

export const generateJWT = (payload: any) => {
    if (!process.env.JWT_SECRET) console.error('Missing JWT_SECRET in .env file!');
    console.log('ERROR')
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET!);
    console.log(accessToken);
    return accessToken;
}

export const decode = (token: string) => {
    return jwt.decode(token);
}

export const verify = (token: string) => {
    let valid = true;
    jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
        console.log('successfully decoded access token');
        if (err) valid = false;
    });
    return valid;
}

export const getSession = async (req: NextApiRequest) => {
    const accessToken = req?.cookies?.accessToken
    if (!accessToken) return null;
    const valid = verify(accessToken);
    if (!valid) return null;
    const payload = decode(accessToken);
    if (!payload) return null;
    if (typeof payload !== 'object') return null;
    if (!payload.userId) return null;

    const user = await getUserById(payload.userId);
    if (!user) return null;

    return user;
}