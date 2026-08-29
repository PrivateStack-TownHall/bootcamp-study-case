import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Type } from 'class-transformer';

import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 23,
    description: 'Inventory category id',
  })
  @Type(() => Number)
  @IsInt()
  categoryId!: number;

  @ApiProperty({
    example: 'AI Smart Assistant',
    description: 'Inventory product name',
  })
  @IsNotEmpty()
  @IsString()
  name!: string;

  @ApiPropertyOptional({
    example: 'Voice-controlled AI assistant for productivity and automation.',
    description: 'Inventory product description',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: 2499000,
    description: 'Inventory product price',
  })
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  price!: number;

  @ApiProperty({
    example: 50,
    description: 'Available inventory stock',
  })
  @Type(() => Number)
  @IsInt()
  @Min(0)
  stock!: number;

  @ApiPropertyOptional({
    example: true,
    description: 'Inventory product active status',
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
