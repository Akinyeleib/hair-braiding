import { IsNumber, IsString } from "class-validator";

export class CreateStyleDto {
  
  @IsString()
  name: string;
  
  @IsString()
  photo_url: string;
  
  @IsNumber()
  amount: string;
  
}
