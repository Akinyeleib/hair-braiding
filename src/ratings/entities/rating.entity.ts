import { IsPositive, IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rating {

  @PrimaryGeneratedColumn()
  id: number;

}
