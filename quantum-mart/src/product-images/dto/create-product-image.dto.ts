import {
   ApiProperty,
   ApiPropertyOptional,
} from '@nestjs/swagger';

import {
   IsInt,
   IsOptional,
   IsString,
} from 'class-validator';

export class CreateProductImageDto {
   @ApiProperty({
      example: 95,
      description:
         'Inventory product id',
   })
   @IsInt()
   productId!: number;

   @ApiProperty({
      example:
         'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      description:
         'Product image URL',
   })
   @IsString()
   imageUrl!: string;

   @ApiPropertyOptional({
      example: 1,
      description:
         'Image display order',
   })
   @IsOptional()
   @IsInt()
   sortOrder?: number;
}