import { IsPositive } from "class-validator";

export class CreateRatingDto {
  
  @IsPositive()
  star: number;

  comment: string;

  client: number;

}
