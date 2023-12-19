import { Module } from '@nestjs/common';
import { StylistsService } from './stylists.service';
import { StylistsController } from './stylists.controller';
import { Stylist } from './entities/stylist.entity';

@Module({
  controllers: [StylistsController],
  imports: [Stylist],
  providers: [StylistsService],
})
export class StylistsModule {}
