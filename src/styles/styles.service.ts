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
    return this.styleRepo.save({...createStyleDto, amount: Number(createStyleDto.amount)});
  }

  findAll() {
    return this.styleRepo.find();
  }

  findOne(id: number) {
    return this.styleRepo.findOne({where: {id}});
  }

  update(id: number, updateStyleDto: UpdateStyleDto) {
    return this.styleRepo.update(id, {...updateStyleDto, amount: Number(updateStyleDto.amount)});
  }

  remove(id: number) {
    return this.styleRepo.delete(id);
  }

}
