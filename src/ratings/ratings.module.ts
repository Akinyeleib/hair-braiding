import { Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { RatingsController } from './ratings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rating } from './entities/rating.entity';
import { ClientsModule } from 'src/clients/clients.module';
import { StylistsModule } from 'src/stylists/stylists.module';

@Module({
  controllers: [RatingsController],
  imports: [TypeOrmModule.forFeature([Rating]), ClientsModule, StylistsModule],
  providers: [RatingsService],
})
export class RatingsModule {}
