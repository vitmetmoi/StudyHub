import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { JwtStrategy } from './jwt/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [DatabaseModule, ConfigModule, PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'duyduyduy123',
      signOptions: { expiresIn: '1d' },
    }),],
  providers: [JwtStrategy],
  exports: [JwtModule],
})
export class CommonModule { }
