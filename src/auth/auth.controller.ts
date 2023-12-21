import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { AuthService } from './auth.service';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';

@Controller('auth')
export class AuthController {
  
  constructor(
    private authService: AuthService
  ) {}

  @Post('login')
  signin(@Body() loginDTO: LoginDTO) {
    return this.authService.login(loginDTO);
  }

  @Post('register')
  signup(createClientDTO: CreateClientDto) {
    this.authService.register(createClientDTO);
  }

}
