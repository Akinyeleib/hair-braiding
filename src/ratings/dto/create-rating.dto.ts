import { IsNotEmpty, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateRatingDto {
  
  @IsPositive()
  star: number;

  @IsOptional()
  @IsString()
  comment: string;

  @IsPositive()
  @IsNotEmpty()
  client: number;

  
  @IsPositive()
  @IsNotEmpty()
  stylist: number;

}
