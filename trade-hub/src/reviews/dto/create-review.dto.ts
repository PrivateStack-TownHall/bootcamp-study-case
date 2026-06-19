import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import {
   IsInt,
   IsOptional,
   IsString,
   Max,
   Min,
} from 'class-validator';

export class CreateReviewDto {
   @ApiProperty({
      example: 61,
      description: 'Catalog item id',
   })
   @IsInt()
   productId!: number;

   @ApiProperty({
      example: 5,
      minimum: 1,
      maximum: 5,
   })
   @IsInt()
   @Min(1)
   @Max(5)
   rating!: number;

   @ApiPropertyOptional({
      example:
         'Excellent gaming keyboard with premium build quality.',
   })
   @IsOptional()
   @IsString()
   comment?: string;
}