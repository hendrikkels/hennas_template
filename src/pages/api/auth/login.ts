import { getUserByEmail } from '@/services/AuthService';
import { validatePassword } from '@/utils/password';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRefreshToken, createAccessToken, sendRefreshToken } from '@/utils/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = JSON.parse(req.body);
        const user = await getUserByEmail(email);
        // console.log('Logging in');
        // console.log(user);

        if (!user) return res.status(400).json({ error: 'A user with this email does not exist!' });

        const clientUser = {
            id: user.id,
            email: user.email,
            role: user.role,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        }

        // console.log('userForTheClient');
        // console.log(clientUser)

        const valid = await validatePassword(password, user?.password ?? '');
        // console.log('valid');
        // console.log(valid);

        if (valid) {
            const token = createRefreshToken(user);
            if (!token) return res.status(400).json({ error: 'Something went wrong!' });
            const accessToken = createAccessToken(user)
            console.log('res.send');
            console.log({ user: clientUser, accessToken });
            sendRefreshToken(res, token)
            res.status(200).json({ user: clientUser, accessToken });
        } else {
            res.status(404).json({ error: 'Something went wrong!' });
        }
    }
}