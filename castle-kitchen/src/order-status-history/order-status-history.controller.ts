import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';

import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

import { OrderStatusHistoryService } from './order-status-history.service';

import {
  SwaggerForbidden,
  SwaggerNotFound,
  SwaggerSuccess,
  SwaggerUnauthorized,
} from '../common/swagger/swagger-response';

// Not scoped to the requesting user (returns/queries across ALL orders),
// so this must stay admin-only. Customers track their own orders via
// GET /orders and GET /orders/:id instead.
@ApiTags('Order Status History')
@Controller('order-status-history')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN)
@ApiBearerAuth()
export class OrderStatusHistoryController {
  constructor(
    private readonly orderStatusHistoryService: OrderStatusHistoryService,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Get Order Status History',
    description: 'Retrieve all order status history records',
  })
  @SwaggerSuccess({
    data: [
      {
        id: 1,
        orderId: 1,
        status: 'PENDING',
        createdAt: '2026-06-18T10:00:00.000Z',
      },
      {
        id: 2,
        orderId: 1,
        status: 'CONFIRMED',
        createdAt: '2026-06-18T10:05:00.000Z',
      },
    ],
  })
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can view order status histories')
  findAll() {
    return this.orderStatusHistoryService.findAll();
  }

  @Get('order/:orderId')
  @ApiOperation({
    summary: 'Get History By Order',
    description: 'Retrieve status history by order id',
  })
  @SwaggerSuccess({
    data: [
      {
        id: 1,
        orderId: 1,
        status: 'PENDING',
        createdAt: '2026-06-18T10:00:00.000Z',
      },
      {
        id: 2,
        orderId: 1,
        status: 'CONFIRMED',
        createdAt: '2026-06-18T10:05:00.000Z',
      },
      {
        id: 3,
        orderId: 1,
        status: 'PREPARING',
        createdAt: '2026-06-18T10:15:00.000Z',
      },
      {
        id: 4,
        orderId: 1,
        status: 'COMPLETED',
        createdAt: '2026-06-18T10:35:00.000Z',
      },
    ],
  })
  @SwaggerNotFound('Order not found')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can view order status histories')
  findByOrder(
    @Param('orderId', ParseIntPipe)
    orderId: number,
  ) {
    return this.orderStatusHistoryService.findByOrder(orderId);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get Order Status History',
    description: 'Retrieve order status history by id',
  })
  @SwaggerSuccess({
    data: {
      id: 1,
      orderId: 1,
      status: 'PENDING',
      createdAt: '2026-06-18T10:00:00.000Z',
    },
  })
  @SwaggerNotFound('Order status history not found')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can view order status histories')
  findOne(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.orderStatusHistoryService.findOne(id);
  }
}
