import { Body, Controller, Post } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamDto } from './dto/team.dto';

@Controller('team')
export class TeamController {

    constructor(private readonly teamService: TeamService) { };

    @Post()
    async create(@Body() data: TeamDto) {
        return this.teamService.create(data);
    }
}
