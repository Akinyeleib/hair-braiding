import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Client } from 'src/clients/entities/client.entity';
import { configDotenv } from 'dotenv';
import { Style } from 'src/styles/entities/style.entity';
import { Appointment } from 'src/appointments/entities/appointment.entity';
import { Rating } from 'src/ratings/entities/rating.entity';
configDotenv()

export const typeOrmConfig: TypeOrmModuleOptions = {  
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Client, Style, Appointment, Rating],
  synchronize: true,
}
