import { MongoClient, Db } from 'mongodb';
import { Database } from './Database'; // шлях до абстрактного класу

export class MongoDB extends Database {
    private client: MongoClient;
    private db: Db | null = null;

    constructor(private uri: string, private dbName: string) {
        super();
        this.client = new MongoClient(this.uri);
    }

    async connect(): Promise<void> {
        await this.client.connect();
        this.db = this.client.db(this.dbName);
        console.log(`Connected to database: ${this.dbName}`);
    }

    async disconnect(): Promise<void> {
        await this.client.close();
        console.log(`Disconnected from database: ${this.dbName}`);
    }

    async insertOne(table: string, data: any): Promise<void> {
        if (!this.db) throw new Error('Database not connected');
        const collection = this.db.collection(table);
        await collection.insertOne(data);
        console.log(`Inserted data into ${table}`);
    }

    async findOne<T>(table: string, query: any): Promise<T> {
        if (!this.db) throw new Error('Database not connected');
        const collection = this.db.collection(table);
        const result = await collection.findOne<T>(query);
        return result as T;
    }
}