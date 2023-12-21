import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { StylistsModule } from './stylists/stylists.module';
import { RatingsModule } from './ratings/ratings.module';
import { StylesModule } from './styles/styles.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ClientsModule, StylistsModule, RatingsModule, StylesModule, AppointmentsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
