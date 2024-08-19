import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: any, res: any, next: () => void) {
    const token = req.headers.authorization;
    if(token) {
      try{
        const user = await admin.auth().verifyIdToken(token);
        req.user = user;
        next();
      }catch(e) {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }
    }else {
      throw new HttpException('Token not found', HttpStatus.UNAUTHORIZED);
    }
  }
}
