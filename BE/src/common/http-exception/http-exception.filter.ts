import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,

} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = 100;
    const message = exception.message;

    response.status(status).json({
      EC: status,
      EM: message,
      DT: null,
    });
  }
}
