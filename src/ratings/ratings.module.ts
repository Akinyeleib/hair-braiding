import { Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { RatingsController } from './ratings.controller';

@Module({
  controllers: [RatingsController],
  providers: [RatingsService],
})
export class RatingsModule {}
