import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Express } from 'express';

@Controller('upload')
export class UploadController {
    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads', // Папка для збереження файлів
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = extname(file.originalname);
                callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
            },
        }),
    }))
    uploadFile(@UploadedFile() file: Express.Multer.File) { // Використовується типізація Express.Multer.File
        console.log(file);
        return {
            originalname: file.originalname,
            filename: file.filename,
            path: `uploads/${file.filename}`,
            size: file.size,
            mimetype: file.mimetype,
        };
    }
}