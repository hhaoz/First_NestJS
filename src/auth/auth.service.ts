import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class AuthService {
    getUser() {
        admin.auth().getUser("RJq2CtBOQhctbBrYmH7wpPhK1xK2").
        then((value) => {
            console.log(value);
        })
    }
}
