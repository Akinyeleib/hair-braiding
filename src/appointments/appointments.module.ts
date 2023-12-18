import { Module } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointmentsController } from './appointments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';

@Module({
  controllers: [AppointmentsController],
  imports: [TypeOrmModule.forFeature([Appointment])],
  providers: [AppointmentsService],
})
export class AppointmentsModule {}
