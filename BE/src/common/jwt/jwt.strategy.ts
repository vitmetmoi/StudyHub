import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false, // if false, token will be rejected when expired
            secretOrKey: process.env.JWT_SECRET || 'duyduyduy123',
        });
    }

    async validate(payload: any) {
        // payload is decoded JWT
        console.log('payload', payload)
        return { userId: payload.sub, email: payload.email };
    }
}