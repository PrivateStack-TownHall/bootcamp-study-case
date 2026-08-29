import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateProductImageDto {
  @ApiProperty({
    example: 1,
    description: 'Burger ID',
  })
  @IsInt()
  productId!: number;

  @ApiProperty({
    example: 'https://images.byteburger.com/double-cheese-burger.jpg',
  })
  @IsString()
  imageUrl!: string;

  @ApiPropertyOptional({
    example: 1,
    description: 'Display order of burger image',
  })
  @IsOptional()
  @IsInt()
  sortOrder?: number;
}
