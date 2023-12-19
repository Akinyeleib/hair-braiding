import { Client } from "src/clients/entities/client.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Appointment {
  
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Client, client => client.appointment)
  client: Client;

  @Column()
  style: number;

  @Column()
  paymentStatus: string;

  @Column()
  date: string;

  @Column()
  stylist: number;

}
