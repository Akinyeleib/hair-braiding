import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ClientsModule } from 'src/clients/clients.module';
import { JwtModule } from '@nestjs/jwt';
import { configDotenv } from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
configDotenv();

@Module({
  controllers: [AuthController],
  imports: [ClientsModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: {expiresIn : '60s'},
  }),
  TypeOrmModule.forFeature([Auth])],
  providers: [AuthService],
})
export class AuthModule {}
