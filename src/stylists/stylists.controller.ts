import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StylistsService } from './stylists.service';
import { CreateStylistDto } from './dto/create-stylist.dto';
import { UpdateStylistDto } from './dto/update-stylist.dto';

@Controller('stylists')
export class StylistsController {
  constructor(private readonly stylistsService: StylistsService) {}

  @Post()
  create(@Body() createStylistDto: CreateStylistDto) {
    return this.stylistsService.create(createStylistDto);
  }

  @Get()
  findAll() {
    return this.stylistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stylistsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStylistDto: UpdateStylistDto) {
    return this.stylistsService.update(+id, updateStylistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stylistsService.remove(+id);
  }
}
