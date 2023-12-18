import { Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rating } from './entities/rating.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RatingsService {

  constructor(
    @InjectRepository(Rating)
    private ratingRepo: Repository<Rating>
  ) {}

  create(createRatingDto: CreateRatingDto) {
    return this.ratingRepo.create(createRatingDto);
  }

  findAll() {
    return this.ratingRepo.find();
  }

  findOne(id: number) {
    return this.ratingRepo.findOne({where:{id}});
  }

  update(id: number, updateRatingDto: UpdateRatingDto) {
    return this.ratingRepo.update(id, updateRatingDto);
  }

  remove(id: number) {
    return this.ratingRepo.delete(id);
  }
  
}
