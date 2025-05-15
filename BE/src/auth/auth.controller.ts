import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Get()
    findAll() {
        console.log('good job');
        return `this API worked!`
    }


}
