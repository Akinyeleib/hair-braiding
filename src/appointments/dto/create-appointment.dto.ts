import { IsDateString, IsIn, IsPositive } from "class-validator";

export class CreateAppointmentDto {

    @IsPositive()
    clientID: number;

    @IsPositive()
    style: number;

    @IsIn(["PAID", "PENDING"])
    paymentStatus: string;

    @IsDateString()
    date: string;

    @IsPositive()
    stylist: number;

}
