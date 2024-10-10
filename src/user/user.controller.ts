import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { };

    @Post()
    async create(@Body() data: UserDto) {
        return this.userService.create(data);
    }

    @Get()
    async findAll() {
        return this.userService.findAll();
    }

    @Put(":id")
    async update(@Param("id") id: number, @Body() data: UserDto) {
        return this.userService.update(Number(id), data);
    }
}
