import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { ClientsService } from 'src/clients/clients.service';
import { LoginDTO } from './dto/login.dto';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';

@Injectable()
export class AuthService {
  
  constructor(
    private clientService: ClientsService,
    private jwtService: JwtService,
  ) {}

  async login(loginDTO: LoginDTO) {
    
    const {username, password} = loginDTO;

    const user = await this.clientService.findUserbyUsername(username);
    if (!user) return "Invalid credentials";
    const validPassword = await compare(password, user.password)
    if (!validPassword) return "Bad credentials";

    return this.jwtService.signAsync({username});
    
  }

  register(createClientDTO: CreateClientDto) {
    return this.clientService.create(createClientDTO);
  }

}
