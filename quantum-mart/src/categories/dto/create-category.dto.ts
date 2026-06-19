import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
   @ApiProperty({
      example: 'AI Devices',
      description:
         'Inventory category name',
   })
   name!: string;

   @ApiProperty({
      example:
         'Artificial intelligence devices',
      description:
         'Inventory category description',
   })
   description?: string;
}