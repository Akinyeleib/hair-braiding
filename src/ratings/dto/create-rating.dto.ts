import { IsPositive } from "class-validator";

export class CreateRatingDto {
  @IsPositive()
  star: number;

  comment: string;

  style: number;

  client: number;
}
