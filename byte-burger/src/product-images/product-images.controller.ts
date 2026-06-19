// product-images.controller.ts

import {
   Body,
   Controller,
   Delete,
   Get,
   Param,
   ParseIntPipe,
   Patch,
   Post,
   UseGuards,
} from '@nestjs/common';

import {
   ApiBearerAuth,
   ApiBody,
   ApiOperation,
   ApiTags,
} from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { ProductImagesService } from './product-images.service';

import { CreateProductImageDto } from './dto/create-product-image.dto';
import { UpdateProductImageDto } from './dto/update-product-image.dto';

import {
   SwaggerCreated,
   SwaggerNotFound,
   SwaggerSuccess,
   SwaggerUnauthorized,
} from '../common/swagger/swagger-response';

@ApiTags('Burger Images')
@Controller('burger-images')
export class ProductImagesController {
   constructor(
      private readonly productImagesService: ProductImagesService,
   ) { }

   @Post()
   @UseGuards(JwtAuthGuard)
   @ApiBearerAuth()
   @ApiOperation({
      summary: 'Create Burger Image',
      description:
         'Create new burger image',
   })
   @ApiBody({
      type: CreateProductImageDto,
   })
   @SwaggerCreated({
      message:
         'Burger image created successfully',
      data: {
         id: 1,
         productId: 1,
         imageUrl:
            'https://example.com/double-cheese-burger.jpg',
         sortOrder: 1,
      },
   })
   @SwaggerUnauthorized()
   create(
      @Body()
      dto: CreateProductImageDto,
   ) {
      return this.productImagesService.create(
         dto,
      );
   }

   @Get()
   @ApiOperation({
      summary: 'Get Burger Images',
      description:
         'Retrieve all burger images',
   })
   @SwaggerSuccess({
      data: [
         {
            id: 1,
            productId: 1,
            imageUrl:
               'https://example.com/double-cheese-burger.jpg',
            sortOrder: 1,
         },
      ],
   })
   findAll() {
      return this.productImagesService.findAll();
   }

   @Get(':id')
   @ApiOperation({
      summary: 'Get Burger Image',
      description:
         'Retrieve burger image by id',
   })
   @SwaggerSuccess({
      data: {
         id: 1,
         productId: 1,
         imageUrl:
            'https://example.com/double-cheese-burger.jpg',
         sortOrder: 1,
      },
   })
   @SwaggerNotFound(
      'Burger image not found',
   )
   findOne(
      @Param('id', ParseIntPipe)
      id: number,
   ) {
      return this.productImagesService.findOne(
         id,
      );
   }

   @Patch(':id')
   @UseGuards(JwtAuthGuard)
   @ApiBearerAuth()
   @ApiOperation({
      summary: 'Update Burger Image',
      description:
         'Update burger image by id',
   })
   @ApiBody({
      type: UpdateProductImageDto,
   })
   @SwaggerSuccess({
      message:
         'Burger image updated successfully',
   })
   @SwaggerNotFound(
      'Burger image not found',
   )
   @SwaggerUnauthorized()
   update(
      @Param('id', ParseIntPipe)
      id: number,

      @Body()
      dto: UpdateProductImageDto,
   ) {
      return this.productImagesService.update(
         id,
         dto,
      );
   }

   @Delete(':id')
   @UseGuards(JwtAuthGuard)
   @ApiBearerAuth()
   @ApiOperation({
      summary: 'Delete Burger Image',
      description:
         'Delete burger image by id',
   })
   @SwaggerSuccess({
      message:
         'Burger image deleted successfully',
   })
   @SwaggerNotFound(
      'Burger image not found',
   )
   @SwaggerUnauthorized()
   remove(
      @Param('id', ParseIntPipe)
      id: number,
   ) {
      return this.productImagesService.remove(
         id,
      );
   }
}