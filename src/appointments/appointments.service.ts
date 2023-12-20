import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { Repository } from 'typeorm';
import { StylistsService } from 'src/stylists/stylists.service';
import { ClientsService } from 'src/clients/clients.service';
import { StylesService } from 'src/styles/styles.service';

@Injectable()
export class AppointmentsService {

  constructor(
    @InjectRepository(Appointment)
    private appointmentRepo: Repository<Appointment>,
    private clientService: ClientsService,
    private styleService: StylesService,
    private stylistService: StylistsService,
  ) {}

  async create(createAppointmentDto: CreateAppointmentDto) {
    
    // check if the client is valid
    const client = await this.clientService.findOne(createAppointmentDto.clientID);
    if (!client) throw new BadRequestException("Invalid client specified");
    
    // check if the style is valid
    const style = await this.stylistService.findOne(createAppointmentDto.styleID);
    if (!style) throw new BadRequestException("Invalid style specified");
    
    // check if the stylist is valid
    const stylist = await this.stylistService.findOne(createAppointmentDto.stylistID);
    if (!stylist) throw new BadRequestException("Invalid stylist specified");

    return this.appointmentRepo.save({
      ...createAppointmentDto, client: client, stylist: stylist, 
      styleID: createAppointmentDto.styleID, paymentStatus: "PENDING"
    });
    
  }

  findAll() {
    return this.appointmentRepo.find({relations: ['client', 'style', 'stylist']});
  }

  findOne(id: number) {
    return this.appointmentRepo.findOne({where: {id}, relations: ['client', 'style', 'stylist']});
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return 'this.appointmentRepo.update(id, updateAppointmentDto)';
  }

  remove(id: number) {
    return this.appointmentRepo.delete(id);
  }

}
