import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './interfaces/user.interface'; // Інтерфейс користувача

@Injectable()
export class UsersService {
  private users: IUser[] = []; // Масив для зберігання користувачів

  // Метод для створення користувача
  create(createUserDto: CreateUserDto): IUser {
    const newUser: IUser = {
      id: this.users.length + 1, // Генерація ID на основі довжини масиву
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  // Метод для отримання всіх користувачів
  findAll(): IUser[] {
    return this.users;
  }

  // Метод для отримання користувача за ID
  findOne(id: number): IUser {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  // Метод для оновлення користувача за ID
  update(id: number, updateUserDto: UpdateUserDto): IUser {
    const userIndex = this.users.findIndex(user => user.id === id);

    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const updatedUser = { ...this.users[userIndex], ...updateUserDto };
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  // Метод для видалення користувача за ID
  remove(id: number): void {
    const userIndex = this.users.findIndex(user => user.id === id);

    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    this.users.splice(userIndex, 1);
  }
}