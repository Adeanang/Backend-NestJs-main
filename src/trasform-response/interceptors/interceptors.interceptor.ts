import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

//define standard response interface
export interface StadardResponse<T> {
  data: T;
  success: boolean;
  message: string;
  statusCode: number;
}

@Injectable()
export class TrasformResponseInterceptor<T> implements NestInterceptor<T,StadardResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<StadardResponse<T>> {
    const httpContext = context.switchToHttp();
    const response = httpContext.getResponse();
    const  statusCode = response.statusCode;


    return next.handle().pipe(
      map((data) => ({
        data : data?? null,
        success: true,
        message: "data berhasil diambil",
        statusCode : statusCode,

      }))
    );
  }
}
