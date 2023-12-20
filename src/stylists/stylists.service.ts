import { Injectable } from '@nestjs/common';
import { CreateStylistDto } from './dto/create-stylist.dto';
import { UpdateStylistDto } from './dto/update-stylist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Stylist } from './entities/stylist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StylistsService {

  constructor(
    @InjectRepository(Stylist)
    private stylistRepo: Repository<Stylist>
  ) {}

  create(createStylistDto: CreateStylistDto) {
    return this.stylistRepo.save(createStylistDto);
  }

  findAll() {
    return this.stylistRepo.find({relations: ['rating',]});
  }

  findOne(id: number) {
    return this.stylistRepo.findOne({where:{id}})
  }

  update(id: number, updateStylistDto: UpdateStylistDto) {
    return `This action updates a #${id} stylist`;
  }

  remove(id: number) {
    return this.stylistRepo.delete(id);
  }
  
}
