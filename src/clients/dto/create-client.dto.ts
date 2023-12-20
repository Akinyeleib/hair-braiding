import { IsEmail, IsNotEmpty, IsNumberString, IsString, Matches } from 'class-validator';
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
  @Matches(/^(\+?234|0)[7-9][01]\d{8}$/, {message: "Invalid Nigerian phone number format"})
  phone_number: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
