import { Rating } from "src/ratings/entities/rating.entity";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stylist {

  @PrimaryGeneratedColumn()
  id: number;

  
  rating: Rating;

}
