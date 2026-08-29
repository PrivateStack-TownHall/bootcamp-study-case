import { IsOptional, IsString } from 'class-validator';

import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCategoryDto {
  @ApiPropertyOptional({
    example: 'Smart Wearables',
    description: 'Inventory category name',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    example: 'Smart wearable technology products',
    description: 'Inventory category description',
  })
  @IsOptional()
  @IsString()
  description?: string;
}
