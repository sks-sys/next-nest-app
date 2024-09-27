import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')  // Set a base route for the API
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('data')  // Endpoint for fetching data
  getData(): { message: string; timestamp: Date } {
    return {
      message: this.appService.getHello(),
      timestamp: new Date(),
    };
  }
}
