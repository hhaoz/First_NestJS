import { Injectable } from '@nestjs/common';
import { Profile } from './models/profile.model';
import * as admin from 'firebase-admin';
import e from 'express';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('Hello ahihi');
    return 'Hello ahihi';
  }
}
