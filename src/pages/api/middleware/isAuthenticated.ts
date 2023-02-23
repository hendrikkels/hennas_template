import { verify } from 'jsonwebtoken';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const isAuthenticated = (handler: NextApiHandler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        console.log('Testing is Authenticated');
        console.log(req.headers.Authorization);
        const authorization = (<string>req.headers.authorization);
        if (!authorization) {
            console.log('no authorization');

            return res.status(401).json({ error: 'Unauthorised' });
            // throw new Error('Un-Authorized');
        }
        console.log('has authorization');

        try {
            const token = authorization.split(' ')[1];

            if (!process.env.ACCESS_TOKEN_SECRET) {
                res.status(400);
                throw new Error('No value for ACCESS_TOKEN_SECRET');
            }

            verify(token, process.env.ACCESS_TOKEN_SECRET);
            const payload = verify(token, process.env.ACCESS_TOKEN_SECRET);

            console.log('VERIFY DONE');

            return handler(req, res);
        }
        catch (err) {
            // throw new Error('Un-Authorized');
            return res.status(401).json({ error: 'Un-Authorized' });

        }
    };
};

export default isAuthenticated;