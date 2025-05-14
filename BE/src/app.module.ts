import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserServiceService } from './user-service/user-service.service';
import { ServicesService } from './services/services.service';
import { ServiceService } from './service/service.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UserServiceService, ServicesService, ServiceService],
})
export class AppModule {}
