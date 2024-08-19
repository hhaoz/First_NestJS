import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { FirebaseModule } from 'nestjs-firebase';
import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './middlewares/auth/auth.middleware';
import { database } from 'firebase-admin';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [ProfileModule, FirebaseModule.forRoot({
    googleApplicationCredential: './firebase-admin-key.json'
  }), AuthModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'dpg-cr1ggr88fa8c73a8q6mg-a.singapore-postgres.render.com',
    port: 5432,
    entities: [User],
    username: 'hhaoz',
    password: '4izBKjWUxctow0G99VV0U2dcWIaGmw74',
    database: 'demo011',
    synchronize: true,
    logging: true,
    ssl: {
    rejectUnauthorized: false
  }
}), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware) // Đăng ký middleware
    .forRoutes('*'); // Áp dụng cho tất cả các route
  }
}
