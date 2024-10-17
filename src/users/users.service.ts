import { Injectable, Inject } from '@nestjs/common';
import { MongoDB } from '../mongodb/mongodb';
import {CreateUserDto} from "../dto/create-user.dto"; // Путь к классу MongoDB

@Injectable()
export class UsersService {
    constructor(@Inject('DATABASE_CONNECTION') private readonly db: typeof MongoDB) {}

    async createUser(data: CreateUserDto) {
        try {
            console.log('Creating user with data:', data); // Логируем входящие данные
            await this.db.insertOne('users', data);
        } catch (error) {
            console.error('Error creating user:', error); // Логируем ошибки
            throw new Error('Could not create user'); // Бросаем ошибку, если что-то пошло не так
        }
    }

    async getUser(query: any) {
        return this.db.findOne('users', query);
    }
}