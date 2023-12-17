import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {

  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
