import { Module } from '@nestjs/common';
import { UploadController } from './upload/upload.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'uploads'),
            serveRoot: '/uploads', // доступ до файлів через http://localhost:3000/uploads
        }),
    ],
    controllers: [UploadController],
})
export class AppModule {}