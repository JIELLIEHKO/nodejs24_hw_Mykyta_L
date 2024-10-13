import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LogIpMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const clientIp = req.ip || (req as any).socket.remoteAddress;
        console.log(`Request from IP: ${clientIp}`);
        next();
    }
}