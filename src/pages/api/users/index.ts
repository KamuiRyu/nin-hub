import { NextApiRequest, NextApiResponse } from 'next';
import { UsersController } from '@api/modules/users/users.controller';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        await UsersController.createUser(req, res);
    } else if (req.method === 'GET') {
        await UsersController.getAllUsers(req, res);
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
