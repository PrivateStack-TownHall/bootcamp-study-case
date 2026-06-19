import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
   @ApiProperty({
      example: 'Catalog',
   })
   name!: string;

   @ApiProperty({
      example: 'Catalog category',
   })
   description?: string;
}