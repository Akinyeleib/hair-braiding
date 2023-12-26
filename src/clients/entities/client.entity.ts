import { hash } from "bcrypt";
import { IsString, Matches } from "class-validator";
import { Appointment } from "src/appointments/entities/appointment.entity";
import { Rating } from "src/ratings/entities/rating.entity";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @IsString()
  phone_number: string;

  @Column()
  password: string;

  @Column({default: "ACTIVE"})
  status: string;

  @Column({default: false})
  emailVerified: boolean;

  // @Column({default: Date.now()})
  // registrationDate: Date;

  @OneToMany(() => Appointment, appointment => appointment.client, {onDelete: "CASCADE", onUpdate: "CASCADE"})
  appointment: Appointment;
  
  @OneToMany(() => Rating, rating => rating.client)
  rating: Rating;

  // @BeforeInsert()
  // async changepassword() {
  //   this.password = await hash(this.password, 10);
  // }

}
