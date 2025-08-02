import { Controller, Get, Query, Post, Body, Put, Param, Delete, Res, NotFoundException, UseGuards } from '@nestjs/common';
import { RegisterService } from './register/register.service';
import { OAuthService } from './o-auth/o-auth.service';
import { CreateOAuthDto } from './dto/oAuth.dto';
import { JwtAuthGuard } from 'src/common/jwt/jwt.guard';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly registerService: RegisterService,
        private readonly oAuthService: OAuthService,
        private readonly jwtService: JwtService
    ) { }

    @Post('google')
    async auth(@Body() oAuthDto: CreateOAuthDto, @Res({ passthrough: true }) res) {
        try {
            console.log('hello', process.env.JWT_SECRET)
            const authRes: any = await this.oAuthService.checkUserAccountService(oAuthDto);

            if (!authRes || !authRes.token) {
                throw new NotFoundException('Not found data!');
            }

            let access_token = authRes.token;

            res.cookie('jwt', access_token, {
                httpOnly: true,
                sameSite: 'lax',
                secure: process.env.NODE_ENV === 'production',
                maxAge: 24 * 60 * 60 * 1000,
            });

            return { authRes };

        } catch (error) {
            console.log(error)
        }

    }


    @Get()
    findAll() {
        console.log('good job');
        return `this API worked!`
    }


}
