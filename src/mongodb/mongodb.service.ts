import { Injectable, Inject } from '@nestjs/common';
import { MongoDB } from './mongodb';

@Injectable()
export class MongoDBService {
    constructor(@Inject('DATABASE_CONNECTION') private db: typeof MongoDB) {}

    async insertOne(table: string, data: any): Promise<void> {
        await this.db.insertOne(table, data);
    }

    async findOne<T>(table: string, query: any): Promise<T | null> {
        return await this.db.findOne<T>(table, query);
    }
}