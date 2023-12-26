import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { ClientsService } from 'src/clients/clients.service';
import { LoginDTO } from './dto/login.dto';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';
import { VerifyEmailAddressDTO } from './dto/verify-email.dto';

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

  async verifyMail(verifyEmailAddressDTO: VerifyEmailAddressDTO) {
    
    const {email} = verifyEmailAddressDTO;

    const user = await this.clientService.findUserbyEmail(email);
    if (!user) throw new NotFoundException("Invalid email address");

    return 'email successfully verified';
    
  }

  async register(createClientDto: CreateClientDto) {

    // check for duplicate username, email, 
     if (await this.clientService.findUserbyUsername(createClientDto.username)) throw new BadRequestException("Duplicate username");
     if (await this.clientService.findUserbyEmail(createClientDto.email)) throw new BadRequestException("Duplicate email address");

    return this.clientService.create(createClientDto);

  }

}
