import { Module } from '@nestjs/common';
import { LoginService } from './login/login.service';
import { LogoutService } from './logout/logout.service';
import { RegisterService } from './register/register.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { OAuthService } from './o-auth/o-auth.service';

@Module({
  imports: [UsersModule],
  providers: [LoginService, LogoutService, RegisterService, OAuthService],
  controllers: [AuthController]
})
export class AuthModule { }
