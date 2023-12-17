import { Injectable } from '@nestjs/common';
import { CreateStylistDto } from './dto/create-stylist.dto';
import { UpdateStylistDto } from './dto/update-stylist.dto';

@Injectable()
export class StylistsService {
  create(createStylistDto: CreateStylistDto) {
    return 'This action adds a new stylist';
  }

  findAll() {
    return `This action returns all stylists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stylist`;
  }

  update(id: number, updateStylistDto: UpdateStylistDto) {
    return `This action updates a #${id} stylist`;
  }

  remove(id: number) {
    return `This action removes a #${id} stylist`;
  }
}
