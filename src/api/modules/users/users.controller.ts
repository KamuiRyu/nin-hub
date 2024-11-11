import { NextApiRequest, NextApiResponse } from 'next';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { validateDto } from '@/utils/validation/validate-dto';
import { response } from '@utils/response';
import { ValidationError } from '@/utils/validation/validation.error';

const usersService = new UsersService();

export class UsersController {
    static async createUser(req: NextApiRequest, res: NextApiResponse) {

        try {
            const userDto: CreateUserDto = await validateDto(CreateUserDto, req.body);
            const user = await usersService.createUser(userDto);
            response(res, 201, 'User created successfully', user);
        } catch (error) {
            if (error instanceof ValidationError) {
                response(res, 400, error.validationErrors);
            } else if (error instanceof Error) {
                response(res, 500, error.message);
            } else {
                response(res, 500, 'An unexpected error occurred');
            }
        }
    }

    static async getAllUsers(req: NextApiRequest, res: NextApiResponse) {
        try {
            const users = await usersService.getAllUsers();
            response(res, 200, 'Users retrieved successfully', users);
        } catch (error) {
            console.error('Error in getAllUsers:', error);

            if (error instanceof Error) {
                response(res, 500, error.message);
            } else {
                response(res, 500, 'An unexpected error occurred');
            }
        }
    }
}
