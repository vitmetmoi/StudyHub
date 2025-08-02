import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    if (request.method === 'OPTIONS') {
      // Allow preflight request to pass
      return true;
    }

    return super.canActivate(context);
  }
}