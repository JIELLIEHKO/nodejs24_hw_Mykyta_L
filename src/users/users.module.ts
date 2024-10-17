import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongoDBModule } from '../mongodb/mongodb.module';
import {mongoDBProvider} from "../mongodb/mongodb.providers";

@Module({
    imports: [MongoDBModule],
    controllers: [UsersController],
    providers: [UsersService, mongoDBProvider],
})
export class UsersModule {}