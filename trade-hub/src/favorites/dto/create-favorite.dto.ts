import { ApiProperty } from '@nestjs/swagger';

import { IsInt, Min } from 'class-validator';

export class CreateFavoriteDto {
  @ApiProperty({
    example: 61,
    description: 'Catalog item id',
  })
  @IsInt()
  @Min(1)
  productId!: number;
}
