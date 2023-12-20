import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rating } from './entities/rating.entity';
import { Repository } from 'typeorm';
import { ClientsService } from 'src/clients/clients.service';
import { StylistsService } from 'src/stylists/stylists.service';

@Injectable()
export class RatingsService {

  constructor(
    @InjectRepository(Rating)
    private ratingRepo: Repository<Rating>,
    private clientService: ClientsService,
    private stylistService: StylistsService,
  ) {}

  async create(createRatingDto: CreateRatingDto) {
    // check if the client is valid
    const client = await this.clientService.findOne(createRatingDto.client);
    if (!client) throw new BadRequestException("Invalid client specified");
    
    // check if the stylist is valid
    const stylist = await this.stylistService.findOne(createRatingDto.stylist);
    if (!stylist) throw new BadRequestException("Invalid stylist specified");

    return this.ratingRepo.save({...createRatingDto, client: client, stylist: stylist});

  }

  findAll() {
    return this.ratingRepo.find({relations: ['client', 'stylist']});
  }

  findOne(id: number) {
    return this.ratingRepo.findOne({where:{id}});
  }

  update(id: number, updateRatingDto: UpdateRatingDto) {
    return 'this.ratingRepo.update(id, updateRatingDto)';
  }

  remove(id: number) {
    return this.ratingRepo.delete(id);
  }
  
}
