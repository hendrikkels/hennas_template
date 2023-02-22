import { verify } from 'jsonwebtoken';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const checkAuth = (handler: NextApiHandler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            console.log(JSON.stringify(req.headers, null, 2));
            const authorization = (<string>req.headers.authorization);
            console.log('authorization');
            console.log(authorization);
            if (!authorization) throw new Error("No Authorization header");

            const token = authorization.split(' ')[1];

            console.log('TOKEN');
            console.log(token);

            if (!process.env.ACCESS_TOKEN_SECRET) {
                return res.status(400).json({ ok: false, accessToken: '' });
            }

            console.log('VERIFY');

            verify(token, process.env.ACCESS_TOKEN_SECRET);
            console.log('VERIFY DONE');

            return handler(req, res);
        } catch (e) {
            console.log(e);
            res.status(400).send('Not Authenticated');
        }
    };
};

export default checkAuth;