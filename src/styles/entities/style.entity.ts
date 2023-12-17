import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Style {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  name: string;

  @Column()
  amount: string;
  
  @Column({unique: true})
  photo_url: string;

}
