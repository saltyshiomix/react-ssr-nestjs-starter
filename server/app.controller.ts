import {
  Controller,
  Get,
} from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  public showHome() {
    return 'Hello World';
  }
}
