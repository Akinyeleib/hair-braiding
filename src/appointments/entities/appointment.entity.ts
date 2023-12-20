import { Client } from "src/clients/entities/client.entity";
import { Style } from "src/styles/entities/style.entity";
import { Stylist } from "src/stylists/entities/stylist.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Appointment {
  
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Client, client => client.appointment)
  client: Client;

  @Column()
  paymentStatus: string;

  @Column({nullable: true})
  date: Date;

  @ManyToOne(() => Stylist, stylist => stylist.appointment)
  stylist: Stylist;

  @OneToOne(() => Style, style => style.appointment)
  @JoinColumn()
  style: Style;

}
