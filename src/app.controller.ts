import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Profile } from './models/profile.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
