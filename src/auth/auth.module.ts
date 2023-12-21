import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ClientsModule } from 'src/clients/clients.module';
import { JwtModule } from '@nestjs/jwt';
import { configDotenv } from 'dotenv';
configDotenv();

@Module({
  controllers: [AuthController],
  imports: [ClientsModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    // signOptions : '60s',
  })],
  providers: [AuthService]
})
export class AuthModule {}
