import { IsNumber, IsString, IsUrl, Matches } from "class-validator";

export class CreateStyleDto {
  
  @IsString()
  name: string;
  
  @IsUrl()
  photo_url: string;
  
  @Matches(/\d+(\.\d+)?/, {message: "Invalid amount specified"})
  amount: string;
  
}
