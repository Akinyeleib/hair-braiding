import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StylesService } from './styles.service';
import { CreateStyleDto } from './dto/create-style.dto';
import { UpdateStyleDto } from './dto/update-style.dto';

@Controller('styles')
export class StylesController {
  constructor(private readonly stylesService: StylesService) {}

  @Post()
  create(@Body() createStyleDto: CreateStyleDto) {
    return this.stylesService.create(createStyleDto);
  }

  @Get()
  findAll() {
    return this.stylesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stylesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStyleDto: UpdateStyleDto) {
    return this.stylesService.update(+id, updateStyleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stylesService.remove(+id);
  }
}
