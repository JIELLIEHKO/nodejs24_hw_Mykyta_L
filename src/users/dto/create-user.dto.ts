import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John', description: 'The first name of the user' })
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'The last name of the user' })
  lastName: string;

  @ApiProperty({ example: 25, description: 'The age of the user' })
  age: number;

  @ApiProperty({ example: true, description: 'Indicates if the user is a student' })
  isStudent: boolean;
}