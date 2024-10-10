import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamDto } from './dto/team.dto';
import { identity } from 'rxjs';

@Controller('team')
export class TeamController {

    constructor(private readonly teamService: TeamService) { };

    @Post()
    async create(@Body() data: TeamDto) {
        return this.teamService.create(data);
    }

    @Get()
    async findAll() {
        return this.teamService.findAll();
    }

    @Put(":id")
    async update(@Param("id") id: number, @Body() data: TeamDto) {
        return this.teamService.update(Number(id), data);
    }
}
