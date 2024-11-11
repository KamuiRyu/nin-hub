import type { NextApiRequest, NextApiResponse } from 'next';
import { UsersController } from '@api/modules/users/users.controller';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    switch (req.method) {
        case 'GET':
            //await UsersController.getUserById(req, res, id as string);
            break;

        case 'DELETE':
            //await UsersController.deleteUserById(req, res, id as string);
            break;

        default:
            res.setHeader('Allow', ['GET', 'DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
