import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  private users: IUser[] = []; // Массив для хранения пользователей

  // Метод для создания пользователя
  create(createUserDto: CreateUserDto) {
    const newUser: IUser = { ...createUserDto };
    this.users.push(newUser);
    return newUser; // Возвращаем созданного пользователя
  }

  // Метод для получения всех пользователей
  findAll() {
    return this.users; // Возвращаем массив пользователей
  }

  // Метод для получения пользователя по ID
  findOne(id: number) {
    return this.users[id]; // Возвращаем пользователя по индексу
  }

  // Метод для обновления пользователя
  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.users[id];
    this.users[id] = { ...user, ...updateUserDto }; // Обновляем данные пользователя
    return this.users[id]; // Возвращаем обновленного пользователя
  }

  // Метод для удаления пользователя
  remove(id: number) {
    const user = this.users[id];
    this.users.splice(id, 1); // Удаляем пользователя из массива
    return user; // Возвращаем удаленного пользователя
  }
}