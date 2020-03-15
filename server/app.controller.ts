import {
  Controller,
  Get,
  Render,
} from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index.tsx')
  public showHomePage() {
    return {
      message: 'Hello NestJS',
    };
  }

  @Get('about')
  @Render('about.hbs')
  public showAboutPage() {
    return {
      message: 'About Page',
    };
  }
}
