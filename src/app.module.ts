import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';
import { StylistsModule } from './stylists/stylists.module';
import { RatingsModule } from './ratings/ratings.module';
import { StylesModule } from './styles/styles.module';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [UsersModule, ClientsModule, StylistsModule, RatingsModule, StylesModule, AppointmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
