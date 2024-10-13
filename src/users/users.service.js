"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = []; // Массив для хранения пользователей
    }
    // Метод для создания пользователя
    create(createUserDto) {
        const newUser = Object.assign({}, createUserDto);
        this.users.push(newUser);
        return newUser; // Возвращаем созданного пользователя
    }
    // Метод для получения всех пользователей
    findAll() {
        return this.users; // Возвращаем массив пользователей
    }
    // Метод для получения пользователя по ID
    findOne(id) {
        return this.users[id]; // Возвращаем пользователя по индексу
    }
    // Метод для обновления пользователя
    update(id, updateUserDto) {
        const user = this.users[id];
        this.users[id] = Object.assign(Object.assign({}, user), updateUserDto); // Обновляем данные пользователя
        return this.users[id]; // Возвращаем обновленного пользователя
    }
    // Метод для удаления пользователя
    remove(id) {
        const user = this.users[id];
        this.users.splice(id, 1); // Удаляем пользователя из массива
        return user; // Возвращаем удаленного пользователя
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
