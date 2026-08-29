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
    description: 'Basic info about the Quantum Mart API',
  })
  @SwaggerSuccess({
    success: true,
    message: 'Quantum Mart API',
  })
  getHello(): { message: string } {
    return {
      message: 'Quantum Mart API',
    };
  }
}
