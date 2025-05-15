import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Get()
    findAll() {
        console.log('good job');
        return `this API worked!`
    }
}
