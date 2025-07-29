import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
@Module({
  imports: [AuthModule, CommonModule, MongooseModule.forRoot('mongodb://localhost:27017/admin'), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
