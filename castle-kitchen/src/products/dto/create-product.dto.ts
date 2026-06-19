import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import {
   IsBoolean,
   IsInt,
   IsNotEmpty,
   IsNumber,
   IsOptional,
   IsString,
   Min,
} from 'class-validator';

export class CreateProductDto {
   @ApiProperty({
      example: 1,
   })
   @Type(() => Number)
   @IsInt()
   categoryId!: number;

   @ApiProperty({
      example: 'Sirloin Steak',
   })
   @IsNotEmpty()
   @IsString()
   name!: string;

   @ApiPropertyOptional({
      example: 'Juicy grilled sirloin steak',
   })
   @IsOptional()
   @IsString()
   description?: string;

   @ApiProperty({
      example: 150000,
   })
   @Type(() => Number)
   @IsNumber()
   @Min(0)
   price!: number;

   @ApiProperty({
      example: 50,
   })
   @Type(() => Number)
   @IsInt()
   @Min(0)
   stock!: number;

   @ApiPropertyOptional({
      example: true,
   })
   @IsOptional()
   @IsBoolean()
   isActive?: boolean;
}