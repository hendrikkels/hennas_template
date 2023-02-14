import { register, getUserByEmail, getUserByUsername } from '@/services/AuthService';
import { hashPassword } from '@/utils/password';
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const bodyObj = JSON.parse(req.body);

    const { username, email, password } = bodyObj;

    if (!bodyObj.username || !bodyObj.email || !bodyObj.password) {
        return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const emailExists = await getUserByEmail(email);
    if (emailExists) return res.status(403).json({ error: `A User with email ${email} already exists!` });

    const usernameExists = await getUserByUsername(username);
    if (usernameExists) return res.status(403).json({ error: `A User with username ${username} already exists!` });

    const hashedPassword = await hashPassword(password);

    try {
        const user = await register({ email: email, username: username, password: hashedPassword });
        console.log(user);
        const clientUser = {
            email: user.email,
            username: user.username,
            role: user.role,
        }
        return res.status(200).json({ user: clientUser });
    } catch (e) {
        res.status(400).json({ error: `Something went wrong` });
        throw e;
    }
}
