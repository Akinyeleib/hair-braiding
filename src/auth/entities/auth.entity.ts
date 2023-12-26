import { Client } from "src/clients/entities/client.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auth {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({unique: true})
  token: string;

  @OneToOne(() => Client, client => client, {onDelete: "CASCADE", onUpdate: "CASCADE"})
  @JoinColumn()
  client: Client;

  // @CreateDateColumn({type : 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  @Column()
  loginDate: Date;
  
}
