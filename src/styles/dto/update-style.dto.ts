import { PartialType } from '@nestjs/mapped-types';
import { CreateStyleDto } from './create-style.dto';

export class UpdateStyleDto extends PartialType(CreateStyleDto) {}
