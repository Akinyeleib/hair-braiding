import { Appointment } from "src/appointments/entities/appointment.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {

  @PrimaryGeneratedColumn()
  id: number;
  @Column({unique: true})
  username: string;

  @Column()
  address: string;
  
  @Column({unique: true})
  email: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  gender: string;

  @Column()
  image_url: string;

  @Column()
  phone_number: string;

  @Column()
  password: string;

  @Column({default: "ACTIVE"})
  status: string;

  @OneToMany(() => Appointment, appointment => appointment.client, {onDelete: "CASCADE", onUpdate: "CASCADE"})
  appointment: Appointment;

}
