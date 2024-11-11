import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

const prisma = new PrismaClient();

export class UsersRepository {
    async create(userDto: CreateUserDto) {
        return prisma.user.create({
            data: userDto,
        });
    }

    async findAll() {
        return prisma.user.findMany();
    }
}
