import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { LogIpMiddleware } from '../middlewares/LogIpMiddleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(LogIpMiddleware)
        .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}