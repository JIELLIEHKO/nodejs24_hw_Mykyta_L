import { Module } from '@nestjs/common';
import { MongoDBService } from './mongodb.service';
import { mongoDBProvider } from './mongodb.providers';

@Module({
    providers: [mongoDBProvider, MongoDBService],
    exports: [MongoDBService],
})
export class MongoDBModule {}