import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const clientIp = req.ip || req.socket.remoteAddress;
        console.log(`Request from IP: ${clientIp}`);
        next();
    }
}