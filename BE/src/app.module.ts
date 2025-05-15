import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [AuthModule, CommonModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }
