import {
   Controller,
   Get,
   Param,
   ParseIntPipe,
   UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { AuditLogsService } from './audit-logs.service';

@Controller('audit-logs')
@UseGuards(JwtAuthGuard)
export class AuditLogsController {
   constructor(
      private readonly auditLogsService: AuditLogsService,
   ) { }

   @Get()
   findAll() {
      return this.auditLogsService.findAll();
   }

   @Get('user/:userId')
   findByUser(
      @Param(
         'userId',
         ParseIntPipe,
      )
      userId: number,
   ) {
      return this.auditLogsService.findByUser(
         userId,
      );
   }

   @Get(':id')
   findOne(
      @Param('id', ParseIntPipe)
      id: number,
   ) {
      return this.auditLogsService.findOne(
         id,
      );
   }
}