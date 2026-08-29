import { ApiProperty } from '@nestjs/swagger';

import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    example: 'Steaks',
    description: 'Menu category name',
  })
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name!: string;

  @ApiProperty({
    example: 'Premium grilled steaks',
    description: 'Menu category description',
  })
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  description!: string;
}
