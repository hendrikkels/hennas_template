import { register, getUserByEmail, getUserByUsername } from '@/services/auth.service';
import { hashPassword } from '@/utils/password';
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    //Convert body to JSON
    const body = JSON.parse(req.body);

    //Check if all fields are present (TODO: replace with zod)
    if (!body.username || !body.email || !body.password) {
        return res.status(400).json({ error: 'Invalid Credentials' });
    }

    //Check if email exists
    const emailExists = await getUserByEmail(body.email);
    if (emailExists) return res.status(403).json({ error: `Email already in use!` });

    //Check if username exists
    const usernameExists = await getUserByUsername(body.username);
    if (usernameExists) return res.status(403).json({ error: `Username already in use!` });

    try {
        const user = await register(body);
        console.log(user);
        return res.status(200).json({ user: user });
    } catch (e) {
        res.status(400).json({ error: `Something went wrong` });
        throw e;
    }
}
