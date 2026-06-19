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
      description:
         'Catalog category id',
   })
   @IsOptional()
   @Type(() => Number)
   @IsInt()
   categoryId?: number;

   @ApiPropertyOptional({
      example:
         'Gaming Keyboard',
   })
   @IsOptional()
   @IsString()
   name?: string;

   @ApiPropertyOptional({
      example:
         'Mechanical gaming keyboard',
   })
   @IsOptional()
   @IsString()
   description?: string;

   @ApiPropertyOptional({
      example: 500000,
   })
   @IsOptional()
   @Type(() => Number)
   @IsNumber()
   @Min(0)
   price?: number;

   @ApiPropertyOptional({
      example: 50,
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