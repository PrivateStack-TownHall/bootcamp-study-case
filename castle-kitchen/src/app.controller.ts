import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

import { SwaggerSuccess } from './common/swagger/swagger-response';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'API Info',
    description: 'Basic info about the Castle Kitchen API',
  })
  @SwaggerSuccess({
    success: true,
    message: 'Castle Kitchen API',
  })
  getHello(): { message: string } {
    return {
      message: 'Castle Kitchen API',
    };
  }
}
