import { Module } from '@nestjs/common';
import { StylistsService } from './stylists.service';
import { StylistsController } from './stylists.controller';
import { Stylist } from './entities/stylist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [StylistsController],
  imports: [TypeOrmModule.forFeature([Stylist])],
  providers: [StylistsService],
})
export class StylistsModule {}
