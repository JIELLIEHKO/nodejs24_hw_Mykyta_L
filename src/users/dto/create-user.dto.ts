import { IsString, IsNumber, IsBoolean } from 'class-validator';
import { ICreateUser } from '../interfaces/create-user.interface';

export class CreateUserDto implements ICreateUser {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsNumber()
  age: number;

  @IsBoolean()
  isStudent: boolean;
}