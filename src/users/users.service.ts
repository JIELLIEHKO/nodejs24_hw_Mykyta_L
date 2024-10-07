import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: IUser[] = [];

  create(createUserDto: CreateUserDto): IUser {
    const newUser: IUser = { ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): IUser[] {
    return this.users;
  }

  findOne(id: number): IUser {
    const user = this.users[id];
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto): IUser {
    const user = this.findOne(id);
    Object.assign(user, updateUserDto);
    return user;
  }

  partialUpdate(id: number, updateUserDto: UpdateUserDto): IUser {
    const user = this.findOne(id);
    Object.assign(user, updateUserDto);
    return user;
  }

  remove(id: number): void {
    const userIndex = this.users.findIndex((user, index) => index === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.users.splice(userIndex, 1);
  }
}
