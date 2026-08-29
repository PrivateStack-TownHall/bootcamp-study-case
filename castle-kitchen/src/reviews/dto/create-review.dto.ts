import { ApiProperty } from '@nestjs/swagger';

import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @ApiProperty({
    example: 30,
    description: 'Menu item id',
  })
  @IsInt()
  productId!: number;

  @ApiProperty({
    example: 5,
    minimum: 1,
    maximum: 5,
    description: 'Rating from 1 to 5',
  })
  @IsInt()
  @Min(1)
  @Max(5)
  rating!: number;

  @ApiProperty({
    example: 'Perfectly cooked sirloin steak.',
    required: false,
  })
  @IsOptional()
  @IsString()
  comment?: string;
}
