import { loginUserByEmail } from '@/services/auth.service';
import { validatePassword } from '@/utils/password';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRefreshToken, createAccessToken, sendRefreshToken } from '@/utils/auth';
import { getUser } from '@/services/user.service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const body = JSON.parse(req.body);

        if (!body.email || !body.password) {
            return res.status(400).json({ error: 'Invalid Credentials' });
        }

        const { email, password } = body;

        const loginUser = await loginUserByEmail(email);

        if (!loginUser) return res.status(400).json({ error: 'A user with this email does not exist!' });

        const valid = await validatePassword(password, loginUser?.password ?? '');

        if (valid) {
            const token = createRefreshToken(loginUser);
            if (!token) return res.status(400).json({ error: 'Something went wrong!' });
            const accessToken = createAccessToken(loginUser)
            sendRefreshToken(res, token)
            const user = await getUser(loginUser.id);
            res.status(200).json({ user: user, accessToken });
        } else {
            res.status(404).json({ error: 'Password incorrect wrong!' });
        }
    }
}