import cookie from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        //deletes refresh token
        res.setHeader('Set-Cookie', cookie.serialize('refreshToken', '', {
            httpOnly: true,
            maxAge: 0,
            path: '/'
        }))
        res.status(200).send('Success')
    }
}