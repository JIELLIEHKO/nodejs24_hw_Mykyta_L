import { MongoClient, Db } from 'mongodb';

export class MongoDB {
    private static client: MongoClient; // Храним клиент
    private static db: Db;

    static async connect(uri: string, dbName: string): Promise<void> {
        if (!this.client) {
            this.client = new MongoClient(uri);
            await this.client.connect();
            this.db = this.client.db(dbName);
            console.log(`Connected to database: ${dbName}`);
        }
    }

    static async disconnect(): Promise<void> {
        if (this.client) {
            await this.client.close();
            console.log('Disconnected from database');
        }
    }

    static async insertOne(table: string, data: any): Promise<void> {
        try {
            console.log(`Inserting data into ${table}:`, data); // Логируем данные перед вставкой
            const collection = this.db.collection(table);
            await collection.insertOne(data);
            console.log(`Inserted data into ${table}`);
        } catch (error) {
            console.error('Error inserting data:', error); // Логируем ошибки
        }
    }

    static async findOne<T>(table: string, query: any): Promise<T | null> {
        const collection = this.db.collection(table);
        return await collection.findOne<T>(query);
    }
}