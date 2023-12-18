import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Appointment {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  style: number;

  @Column()
  paymentStatus: string;

  @Column()
  date: string;

  @Column()
  stylist: number;

}
