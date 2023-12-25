import { IsEmail, IsNotEmpty } from "class-validator";

export class verifyEmailAddressDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
