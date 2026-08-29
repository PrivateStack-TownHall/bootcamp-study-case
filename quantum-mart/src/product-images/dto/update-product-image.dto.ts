import { ApiPropertyOptional } from '@nestjs/swagger';

import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateProductImageDto {
  @ApiPropertyOptional({
    example: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    description: 'Product image URL',
  })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiPropertyOptional({
    example: 2,
    description: 'Image display order',
  })
  @IsOptional()
  @IsInt()
  sortOrder?: number;
}
