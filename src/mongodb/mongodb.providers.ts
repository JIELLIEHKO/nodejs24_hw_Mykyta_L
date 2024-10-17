import { MongoDB } from './mongodb';

export const mongoDBProvider = {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
        const uri = 'mongodb://localhost:27017/testdb'; // Замените на вашу строку подключения
        const dbName = 'testdb'; // Имя вашей базы данных
        await MongoDB.connect(uri, dbName);
        return MongoDB; // Возвращаем класс MongoDB для дальнейшего использования
    },
};