import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';
import { ICreateUser } from './interfaces/create-user.interface';
import { IUpdateUser } from './interfaces/update-user.interface';

@Injectable()
export class UsersService {
  private users: IUser[] = [];

  create(user: ICreateUser): IUser {
    const newUser: IUser = { ...user };
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

  update(id: number, updateUser: IUpdateUser): IUser {
    const user = this.findOne(id);
    Object.assign(user, updateUser);
    return user;
  }

  partialUpdate(id: number, updateUser: IUpdateUser): IUser {
    const user = this.findOne(id);
    Object.assign(user, updateUser);
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