import { Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { RatingsController } from './ratings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rating } from './entities/rating.entity';

@Module({
  controllers: [RatingsController],
  imports: [TypeOrmModule.forFeature([Rating])],
  providers: [RatingsService],
})
export class RatingsModule {}
