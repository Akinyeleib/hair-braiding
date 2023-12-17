import { Injectable } from '@nestjs/common';
import { CreateStyleDto } from './dto/create-style.dto';
import { UpdateStyleDto } from './dto/update-style.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Style } from './entities/style.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StylesService {

  constructor(
    @InjectRepository(Style)
    private styleRepo: Repository<Style>
  ) {}

  create(createStyleDto: CreateStyleDto) {
    return 'This action adds a new style';
  }

  findAll() {
    return `This action returns all styles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} style`;
  }

  update(id: number, updateStyleDto: UpdateStyleDto) {
    return `This action updates a #${id} style`;
  }

  remove(id: number) {
    return `This action removes a #${id} style`;
  }
}
