import { ApiProperty } from '@nestjs/swagger';

import { IsInt } from 'class-validator';

export class CreateFavoriteDto {
  @ApiProperty({
    example: 95,
    description: 'Inventory product id',
  })
  @IsInt()
  productId!: number;
}
