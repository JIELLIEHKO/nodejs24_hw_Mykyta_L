import { MongoDB } from './MongoDB';

(async () => {
    const db = new MongoDB('mongodb://localhost:27017', 'testdb');

    try {
        await db.connect();

        // Вставка даних
        await db.insertOne('users', { name: 'John', age: 30 });

        // Пошук одного документу
        const user = await db.findOne('users', { name: 'John' });
        console.log(user);

    } finally {
        await db.disconnect();
    }
})();