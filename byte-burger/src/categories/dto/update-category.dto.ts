import { ApiPropertyOptional } from '@nestjs/swagger';

import { IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @ApiPropertyOptional({
    example: 'Beef Burger',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    example: 'Premium beef burger category',
  })
  @IsOptional()
  @IsString()
  description?: string;
}
