import { IsPositive, IsString } from "class-validator";
import { Client } from "src/clients/entities/client.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rating {

  @PrimaryGeneratedColumn()
  id: number;
  
  @IsPositive()
  star: number;

  @IsString()
  comment: string;

  @IsPositive()
  appointmentID: number;

  @ManyToOne(() => Client, client => client.rating)
  client: Client;

}
