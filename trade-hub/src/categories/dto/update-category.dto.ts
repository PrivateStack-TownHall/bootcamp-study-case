import { ApiPropertyOptional } from '@nestjs/swagger';

import { IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @ApiPropertyOptional({
    example: 'Electronics',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    example: 'Electronics and gadgets category',
  })
  @IsOptional()
  @IsString()
  description?: string;
}
