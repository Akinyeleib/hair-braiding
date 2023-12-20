import { Appointment } from "src/appointments/entities/appointment.entity";
import { Rating } from "src/ratings/entities/rating.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stylist {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paymentInfo: string;

  @OneToMany(() => Rating, rating => rating.stylist)
  rating: Rating[];

  @OneToMany(() => Appointment, appointment => appointment.stylist)
  appointment: Appointment[];
  
}
