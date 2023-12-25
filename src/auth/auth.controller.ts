import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { AuthService } from './auth.service';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';
import { JWTGuard } from './jwt-guard.auth';

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
  signup(@Body() createClientDTO: CreateClientDto) {
    return this.authService.register(createClientDTO);
  }

  @Post()
  @UseGuards(JWTGuard)
  testGuard() {
    return "passed"
  }

  @Post('verify-email-address')
  verifyMail(@Body('email') email: string) {
    return {email};
  }

}
