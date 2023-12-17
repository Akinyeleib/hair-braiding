import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Client } from 'src/clients/entities/client.entity';
import { configDotenv } from 'dotenv';
configDotenv()

export const typeOrmConfig: TypeOrmModuleOptions = {  
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Client],
  synchronize: true,
}
