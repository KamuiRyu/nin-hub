import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';

export class UsersService {
    private usersRepository = new UsersRepository();

    async createUser(userDto: CreateUserDto) {
        return this.usersRepository.create(userDto);
    }

    async getAllUsers() {
        return this.usersRepository.findAll();
    }
}