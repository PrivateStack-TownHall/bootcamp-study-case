import { ApiProperty } from '@nestjs/swagger';

import { IsEnum, IsOptional, IsString } from 'class-validator';

import { OrderStatus } from '@prisma/client';

export class UpdateOrderStatusDto {
  @ApiProperty({
    enum: OrderStatus,
    example: OrderStatus.PROCESSING,
    description: 'Order status',
  })
  @IsEnum(OrderStatus)
  status!: OrderStatus;

  @ApiProperty({
    example: 'Preparing order for shipment',
    required: false,
    description: 'Additional notes for the order',
  })
  @IsOptional()
  @IsString()
  notes?: string;
}
