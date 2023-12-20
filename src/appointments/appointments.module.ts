import { Module } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointmentsController } from './appointments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { ClientsModule } from 'src/clients/clients.module';
import { StylesModule } from 'src/styles/styles.module';
import { StylistsModule } from 'src/stylists/stylists.module';

@Module({
  controllers: [AppointmentsController],
  imports: [TypeOrmModule.forFeature([Appointment]), ClientsModule, StylesModule, StylistsModule],
  providers: [AppointmentsService],
})
export class AppointmentsModule {}
