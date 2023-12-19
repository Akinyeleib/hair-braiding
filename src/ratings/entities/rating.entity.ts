import { IsPositive, IsString } from "class-validator";
import { Client } from "src/clients/entities/client.entity";
import { Stylist } from "src/stylists/entities/stylist.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rating {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  star: number;

  @Column()
  comment: string;

  @IsPositive()
  appointmentID: number;

  @ManyToOne(() => Client, client => client.rating)
  client: Client;

  @ManyToOne(() => Stylist, stylist => stylist.rating)
  stylist: Stylist;

}
