import { IsEmail, IsNotEmpty } from "class-validator";

export class VerifyEmailAddressDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
