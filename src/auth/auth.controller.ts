import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { AuthService } from './auth.service';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';
import { JWTGuard } from './jwt-guard.auth';
import { VerifyEmailAddressDTO } from './dto/verify-email.dto';
// import { Request } from 'express';

@Controller('auth')
export class AuthController {
  
  constructor(
    private authService: AuthService
  ) {}

  @Post('login')
  signin(@Body() loginDTO: LoginDTO) {
    return this.authService.login(loginDTO);
  }

  @Post('logout')
  @UseGuards(JWTGuard)
  signout(@Body() loginDTO: LoginDTO, @Request() req: any) {
    return this.authService.logout(loginDTO, req);
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
  verifyMail(@Body() verifyEmailAddressDTO: VerifyEmailAddressDTO) {
    return this.authService.verifyMail(verifyEmailAddressDTO);
  }

}
