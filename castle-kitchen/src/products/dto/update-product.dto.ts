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
   })
   @IsOptional()
   @Type(() => Number)
   @IsInt()
   categoryId?: number;

   @ApiPropertyOptional({
      example: 'Rib Eye Steak',
   })
   @IsOptional()
   @IsString()
   name?: string;

   @ApiPropertyOptional({
      example: 'Premium rib eye steak',
   })
   @IsOptional()
   @IsString()
   description?: string;

   @ApiPropertyOptional({
      example: 185000,
   })
   @IsOptional()
   @Type(() => Number)
   @IsNumber()
   @Min(0)
   price?: number;

   @ApiPropertyOptional({
      example: 40,
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