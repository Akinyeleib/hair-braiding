import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from "bcrypt";

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client) 
    private clientRepo: Repository<Client>
  ) {}
  
  async create(createClientDto: CreateClientDto) {

    // check for unique email
    // const uniqueEmail = 
    await this.clientRepo.findOne(
      {where: {email: createClientDto.email}}
      ).then((value) => {if (value) throw new BadRequestException("Duplicate email address");}
      ).catch();

    const client = this.clientRepo.create(createClientDto);
    client.password = await hash(client.password, 10);
    return this.clientRepo.save(client);
    // return this.clientRepo.save(createClientDto);
  }

  findAll() {
    return this.clientRepo.find();
  }

  findOne(id: number) {
    return this.clientRepo.findOne({where: {id}});
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return this.clientRepo.delete(id);
  }
}
