import { Module } from '@nestjs/common';
import { LoginService } from './login/login.service';
import { LogoutService } from './logout/logout.service';
import { RegisterService } from './register/register.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { OAuthService } from './o-auth/o-auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/users/entities/user.entity';
import { UserSchema } from 'src/users/entities/user.entity';
import { CommonModule } from 'src/common/common.module';
@Module({
  imports: [UsersModule, CommonModule],
  providers: [LoginService, LogoutService, RegisterService, OAuthService],
  controllers: [AuthController]
})
export class AuthModule { }
