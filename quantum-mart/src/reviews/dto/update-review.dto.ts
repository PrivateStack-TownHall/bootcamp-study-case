import { ApiPropertyOptional } from '@nestjs/swagger';

import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class UpdateReviewDto {
  @ApiPropertyOptional({
    example: 4,
    minimum: 1,
    maximum: 5,
    description: 'Review rating',
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  rating?: number;

  @ApiPropertyOptional({
    example: 'Updated review after several weeks of usage.',
    description: 'Review comment',
  })
  @IsOptional()
  @IsString()
  comment?: string;
}
