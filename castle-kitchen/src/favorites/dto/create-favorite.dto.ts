import { ApiProperty } from '@nestjs/swagger';

import { IsInt } from 'class-validator';

export class CreateFavoriteDto {
   @ApiProperty({
      example: 30,
      description: 'Menu item id',
   })
   @IsInt()
   productId!: number;
}