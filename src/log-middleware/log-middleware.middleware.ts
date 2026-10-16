import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response,   } from 'express';

@Injectable()
export class LogMiddlewareMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTPP');

  use(req: Request, res: Response, next : NextFunction){
    const { method, originalUrl, ip } = req;
    const userAgent = req.get('user-agent') || '';
    const starTime = Date.now();

    res.on ('finish', () => {
      const {statusCode } = res;
      const contenLength = res.get ('contenLength');
      const ResponseTime = Date.now () - starTime;


       this.logger.log(
        '${method} ${originalUrl} ${statusCode} ${contenLength || 0 } - ${ResponseTime}ms ${userAgent} ${ip}',
        
       );
    }

    );

    next();
  }
}
