import { createUserProfile } from '@/controllers/profile';
import { createUser, getUserByEmail, getUserByUsername } from '@/controllers/user';
import { hashPassword } from '@/utils/password';
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    //Convert body to JSON
    const body = req.body;

    //Check if all fields are present (TODO: replace with zod)
    if (!body.username || !body.email || !body.password) {
        return res.status(400).send('Bad request');
    }

    //Check if email exists
    const emailExists = await getUserByEmail(body.email);
    if (emailExists) return res.status(403).send('Email already in use');

    //Check if username exists
    const usernameExists = await getUserByUsername(body.username);
    if (usernameExists) return res.status(403).send('Username already in use');

    //Hash the password
    const hashedPassword = await hashPassword(body.password);
    console.log(hashedPassword);

    const registerUser = {
        username: body.username,
        email: body.email,
        password: hashedPassword,
    };

    try {
        const user = await createUser(registerUser);
        const profile = await createUserProfile(user.id);
        return res.status(200).json({ user: { ...user, profile: profile } });
    } catch (e) {
        res.status(400).send('Something went wrong');
        throw e;
    }
}
