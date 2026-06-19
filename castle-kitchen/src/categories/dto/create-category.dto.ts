import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
   @ApiProperty({
      example: 'Steaks',
   })
   name!: string;

   @ApiProperty({
      example: 'Premium grilled steaks',
   })
   description?: string;
}