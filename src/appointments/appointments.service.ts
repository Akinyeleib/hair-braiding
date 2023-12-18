import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppointmentsService {

  constructor(
    @InjectRepository(Appointment)
    private appointmentRepo: Repository<Appointment>
  ) {}

  create(createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentRepo.create(createAppointmentDto);
  }

  findAll() {
    return this.appointmentRepo.find();
  }

  findOne(id: number) {
    return this.appointmentRepo.findOne({where: {id}});
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentRepo.update(id, updateAppointmentDto);
  }

  remove(id: number) {
    return this.appointmentRepo.delete(id);
  }
}
