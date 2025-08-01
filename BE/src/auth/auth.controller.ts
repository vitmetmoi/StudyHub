import { Controller, Get, Query, Post, Body, Put, Param, Delete, Res } from '@nestjs/common';
import { RegisterService } from './register/register.service';
@Controller('auth')
export class AuthController {
    constructor(private readonly Re: RegisterService) { }

    @Post('/auth/google')
    auth(@Body() body, @Res() res) {
        try {
            await this.usersService
        } catch (e) {
            res.status(e.status).json({
                EC: -1,
                EM: 'err from auth controller!',
                DT: ''
            })
        }
    }


    @Get()
    findAll() {
        console.log('good job');
        return `this API worked!`
    }


}
