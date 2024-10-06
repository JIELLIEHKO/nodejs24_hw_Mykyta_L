import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  private users: IUser[] = [];

  create(createUserDto: CreateUserDto) {
    const newUser: IUser = { ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users[id];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.users[id];
    this.users[id] = { ...user, ...updateUserDto };
    return this.users[id];
  }

  remove(id: number) {
    const user = this.users[id];
    this.users.splice(id, 1);
    return user;
  }
}