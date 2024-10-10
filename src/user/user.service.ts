import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/dataBase/prisma.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) { };

    async create(data: UserDto) {
        const user = await this.prisma.user.create({
            data
        });

        return user;
    };

}
