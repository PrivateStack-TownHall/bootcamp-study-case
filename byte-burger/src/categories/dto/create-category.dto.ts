import { ApiProperty } from '@nestjs/swagger';

import {
   IsOptional,
   IsString,
} from 'class-validator';

export class CreateCategoryDto {
   @ApiProperty({
      example: 'Beef Burger',
   })
   @IsString()
   name!: string;

   @ApiProperty({
      example:
         'Premium beef burger category',
   })
   @IsOptional()
   @IsString()
   description?: string;
}