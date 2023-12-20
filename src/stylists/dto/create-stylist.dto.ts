import { IsString } from "class-validator";

export class CreateStylistDto {

  @IsString()
  paymentInfo: string;

}
