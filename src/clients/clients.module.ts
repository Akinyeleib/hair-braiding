import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';

@Module({
  controllers: [ClientsController],
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [ClientsService],
})
export class ClientsModule {}
