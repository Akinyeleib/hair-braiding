import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}
