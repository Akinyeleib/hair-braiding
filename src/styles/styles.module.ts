import { Module } from '@nestjs/common';
import { StylesService } from './styles.service';
import { StylesController } from './styles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Style } from './entities/style.entity';

@Module({
  controllers: [StylesController],
  imports: [TypeOrmModule.forFeature([Style])],
  providers: [StylesService],
})
export class StylesModule {}
