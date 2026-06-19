// update-product.dto.ts

import {
   ApiPropertyOptional,
} from '@nestjs/swagger';

import { Type } from 'class-transformer';

import {
   IsBoolean,
   IsInt,
   IsNumber,
   IsOptional,
   IsString,
   Min,
} from 'class-validator';

export class UpdateProductDto {
   @ApiPropertyOptional({
      example: 1,
      description: 'Burger category id',
   })
   @IsOptional()
   @Type(() => Number)
   @IsInt()
   categoryId?: number;

   @ApiPropertyOptional({
      example: 'Double Cheese Burger',
   })
   @IsOptional()
   @IsString()
   name?: string;

   @ApiPropertyOptional({
      example:
         'Juicy beef burger with double cheddar cheese',
   })
   @IsOptional()
   @IsString()
   description?: string;

   @ApiPropertyOptional({
      example: 55000,
   })
   @IsOptional()
   @Type(() => Number)
   @IsNumber()
   @Min(0)
   price?: number;

   @ApiPropertyOptional({
      example: 100,
   })
   @IsOptional()
   @Type(() => Number)
   @IsInt()
   @Min(0)
   stock?: number;

   @ApiPropertyOptional({
      example: true,
   })
   @IsOptional()
   @IsBoolean()
   isActive?: boolean;
}