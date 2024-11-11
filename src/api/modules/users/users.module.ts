import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';

export const UsersModule = {
    controller: UsersController,
    service: UsersService,
    repository: UsersRepository,
};