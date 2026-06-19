import { ApiPropertyOptional } from '@nestjs/swagger';

import {
   IsInt,
   IsOptional,
   IsString,
} from 'class-validator';

export class UpdateProductImageDto {
   @ApiPropertyOptional({
      example:
         'https://images.byteburger.com/double-cheese-burger-v2.jpg',
   })
   @IsOptional()
   @IsString()
   imageUrl?: string;

   @ApiPropertyOptional({
      example: 2,
      description:
         'Display order of burger image',
   })
   @IsOptional()
   @IsInt()
   sortOrder?: number;
}