import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/create-user.dto'; // Импортируйте DTO

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        const user = await this.usersService.createUser(createUserDto); // Сохраняем пользователя
        return { message: 'User created successfully', user }; // Возвращаем сообщение и созданного пользователя
    }

    @Get()
    async findOne(@Query() query: any) {
        const user = await this.usersService.getUser(query); // Получаем пользователя
        return user || { message: 'User not found' }; // Возвращаем пользователя или сообщение
    }
}