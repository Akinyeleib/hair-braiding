import { IsDate, IsIn, IsOptional, IsPositive } from "class-validator";

export class CreateAppointmentDto {

    @IsPositive()
    clientID: number;

    @IsPositive()
    styleID: number;

    @IsIn(["PAID", "PENDING"])
    @IsOptional()
    paymentStatus: string;

    @IsDate()
    @IsOptional()
    date: string;

    @IsPositive()
    stylistID: number;

}
