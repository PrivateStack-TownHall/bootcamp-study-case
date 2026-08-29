import { ApiProperty } from '@nestjs/swagger';

import { IsInt } from 'class-validator';

export class CreateFavoriteDto {
  @ApiProperty({
    example: 1,
    description: 'Burger ID',
  })
  @IsInt()
  productId!: number;
}
