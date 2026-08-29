import { ApiPropertyOptional } from '@nestjs/swagger';

import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateCategoryDto {
  @ApiPropertyOptional({
    example: 'Desserts',
  })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name?: string;

  @ApiPropertyOptional({
    example: 'Sweet treats and desserts',
  })
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  description?: string;
}
