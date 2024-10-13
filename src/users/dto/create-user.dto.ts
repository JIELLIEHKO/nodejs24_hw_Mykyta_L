import { IsBoolean, IsInt, IsString, Min } from 'class-validator';

export class CreateUserDto {
    @IsString()
    firstName!: string;

    @IsString()
    lastName!: string;

    @IsInt()
    @Min(0)
    age!: number;

    @IsBoolean()
    isStudent!: boolean;
}