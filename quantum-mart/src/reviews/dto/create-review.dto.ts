import {
   ApiProperty,
   ApiPropertyOptional,
} from '@nestjs/swagger';

import {
   IsInt,
   IsOptional,
   IsString,
   Max,
   Min,
} from 'class-validator';

export class CreateReviewDto {
   @ApiProperty({
      example: 95,
      description:
         'Inventory product id',
   })
   @IsInt()
   productId!: number;

   @ApiProperty({
      example: 5,
      minimum: 1,
      maximum: 5,
      description:
         'Review rating',
   })
   @IsInt()
   @Min(1)
   @Max(5)
   rating!: number;

   @ApiPropertyOptional({
      example:
         'Excellent AI assistant with impressive features.',
      description:
         'Review comment',
   })
   @IsOptional()
   @IsString()
   comment?: string;
}