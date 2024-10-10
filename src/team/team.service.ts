import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/dataBase/prisma.service';
import { TeamDto } from './dto/team.dto';

@Injectable()
export class TeamService {

    constructor(private prisma: PrismaService) { };

    async create(data: TeamDto) {
        const team = await this.prisma.team.create({
            data: {
                name: data.name,
                day_match: data.dayMatch,
                members: {
                    create: data.members.map(member => ({
                        user: { connect: { id: member.userId } }
                    })),
                }
            }
        });

        return team;
    }

    async findAll() {
        return this.prisma.team.findMany();
    }

}
