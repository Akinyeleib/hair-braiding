import { IsEmail, IsNotEmpty, IsNumberString, IsString } from 'class-validator';
export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  address: string;
  @IsString()
  @IsNotEmpty()
  state: string;
  @IsString()
  @IsNotEmpty()
  country: string;
  @IsString()
  @IsNotEmpty()
  gender: string;
  @IsString()
  @IsNotEmpty()
  image_url: string;
  @IsNumberString()
  @IsNotEmpty()
  phone_number: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsNotEmpty()
  status: string;
}
