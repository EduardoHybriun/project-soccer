import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './dataBase/prisma.service';
import { UserModule } from './user/user.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [UserModule, TeamModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
