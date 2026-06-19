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
   SwaggerBadRequest,
   SwaggerCreated,
   SwaggerNotFound,
   SwaggerSuccess,
   SwaggerUnauthorized,
} from '../common/swagger/swagger-response';

@ApiTags('Inventory Images')
@Controller('inventory-images')
export class ProductImagesController {
   constructor(
      private readonly productImagesService: ProductImagesService,
   ) {}

   @Post()
   @UseGuards(JwtAuthGuard)
   @ApiBearerAuth()
   @ApiOperation({
      summary:
         'Create Inventory Image',
      description:
         'Create new inventory image',
   })
   @ApiBody({
      type: CreateProductImageDto,
   })
   @SwaggerCreated({
      message:
         'Inventory image created successfully',
      data: {
         id: 149,
         productId: 95,
         imageUrl:
            'https://images.unsplash.com/photo-1677442136019-21780ecad995',
         sortOrder: 1,
         createdAt:
            '2026-06-20T00:00:00.000Z',
         updatedAt:
            '2026-06-20T00:00:00.000Z',
      },
   })
   @SwaggerBadRequest(
      'Product not found',
   )
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
      summary:
         'Get Inventory Images',
      description:
         'Retrieve all inventory images',
   })
   @SwaggerSuccess({
      data: [
         {
            id: 149,
            productId: 95,
            imageUrl:
               'https://images.unsplash.com/photo-1677442136019-21780ecad995',
            sortOrder: 1,
            createdAt:
               '2026-06-20T00:00:00.000Z',
            updatedAt:
               '2026-06-20T00:00:00.000Z',
         },
      ],
   })
   findAll() {
      return this.productImagesService.findAll();
   }

   @Get(':id')
   @ApiOperation({
      summary:
         'Get Inventory Image',
      description:
         'Retrieve inventory image by id',
   })
   @SwaggerSuccess({
      data: {
         id: 149,
         productId: 95,
         imageUrl:
            'https://images.unsplash.com/photo-1677442136019-21780ecad995',
         sortOrder: 1,
         createdAt:
            '2026-06-20T00:00:00.000Z',
         updatedAt:
            '2026-06-20T00:00:00.000Z',
      },
   })
   @SwaggerNotFound(
      'Inventory image not found',
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
      summary:
         'Update Inventory Image',
      description:
         'Update inventory image by id',
   })
   @ApiBody({
      type: UpdateProductImageDto,
   })
   @SwaggerSuccess({
      message:
         'Inventory image updated successfully',
      data: {
         id: 149,
         productId: 95,
         imageUrl:
            'https://images.unsplash.com/photo-1677442136019-21780ecad995',
         sortOrder: 2,
         createdAt:
            '2026-06-20T00:00:00.000Z',
         updatedAt:
            '2026-06-20T00:00:00.000Z',
      },
   })
   @SwaggerNotFound(
      'Inventory image not found',
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
      summary:
         'Delete Inventory Image',
      description:
         'Delete inventory image by id',
   })
   @SwaggerSuccess({
      message:
         'Inventory image deleted successfully',
   })
   @SwaggerNotFound(
      'Inventory image not found',
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