import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { ClientsService } from 'src/clients/clients.service';
import { LoginDTO } from './dto/login.dto';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';
import { VerifyEmailAddressDTO } from './dto/verify-email.dto';
import { Resend } from 'resend';
import { configDotenv } from 'dotenv';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
configDotenv();

@Injectable()
export class AuthService {
  
  constructor(
    private clientService: ClientsService,
    private jwtService: JwtService,
    @InjectRepository(Auth) private authRepo: Repository<Auth>,
  ) {}
  
  logout(loginDTO: LoginDTO, req: any) {
    // check if token is valid: won't get here because of the guard on the controller
    return req['user']['username'] 
    // check if token belongs to the right user
  }

  async login(loginDTO: LoginDTO) {
    
    const {username, password} = loginDTO;

    const user = await this.clientService.findUserbyUsername(username);
    if (!user) return "Invalid credentials";
    const validPassword = await compare(password, user.password)
    if (!validPassword) return "Bad credentials";

    const token = await this.jwtService.signAsync({username});
    this.authRepo.delete({ client : user });

    this.authRepo.save({
      token,
      client : user 
    });

    return token;
    
  }

  async verifyMail(verifyEmailAddressDTO: VerifyEmailAddressDTO) {
    
    const {email} = verifyEmailAddressDTO;

    // const user = await this.clientService.findUserbyEmail(email);
    // if (!user) throw new NotFoundException("Invalid email address");

    const resend = new Resend(process.env.EMAIL_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'iakinyele3@gmail.com',
      to: verifyEmailAddressDTO.email,
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email from nest-js</strong>!</p>',
    });

    if (error) return error
    return {
      message : "success",
      data
    }

    /*
    .then((data) => {
      console.log("success");
      console.log({data});
      return {result: data}
    })
    .catch((err) => {
      console.log("failed");
      console.log({err});
      return {err}
    });
    */

    // return 'email successfully verified';
    
  }

  async register(createClientDto: CreateClientDto) {

    // check for duplicate username, email, 
    if (await this.clientService.findUserbyUsername(createClientDto.username)) throw new BadRequestException("Duplicate username");
    if (await this.clientService.findUserbyEmail(createClientDto.email)) throw new BadRequestException("Duplicate email address");

    return this.clientService.create(createClientDto);

  }

}
