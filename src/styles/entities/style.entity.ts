import { Appointment } from "src/appointments/entities/appointment.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Style {

  @PrimaryGeneratedColumn()
  id: number;

  @Column(/*{unique: true}*/)
  name: string;

  @Column()
  amount: number;
  
  @Column(/*{unique: true}*/)
  photo_url: string;

  @OneToOne(() => Appointment, appointment => appointment.style)
  appointment: Appointment;

}
