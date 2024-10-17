import { Module } from '@nestjs/common';
import { MongoDBModule } from './mongodb/mongodb.module';
import {UsersModule} from "./users/users.module";

@Module({
    imports: [MongoDBModule, UsersModule],
})
export class AppModule {}