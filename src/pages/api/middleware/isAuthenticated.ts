import { verify } from 'jsonwebtoken';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const isAuthenticated = (handler: NextApiHandler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const authorization = (<string>req.headers.authorization);
        if (!authorization) {

            return res.status(401).send('Unauthorised');
            // throw new Error('Un-Authorized');
        }

        try {
            const token = authorization.split(' ')[1];

            if (!process.env.ACCESS_TOKEN_SECRET) {
                res.status(400).send('Bad request');
                throw new Error('No value for ACCESS_TOKEN_SECRET');
            }

            verify(token, process.env.ACCESS_TOKEN_SECRET);
            const payload = verify(token, process.env.ACCESS_TOKEN_SECRET);

            return handler(req, res);
        }
        catch (err) {
            // throw new Error('Un-Authorized');
            return res.status(401).send('Un-Authorized');

        }
    };
};

export default isAuthenticated;