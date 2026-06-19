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

@ApiTags('Catalog Images')
@Controller('catalog-images')
export class ProductImagesController {
   constructor(
      private readonly productImagesService: ProductImagesService,
   ) {}

   @Post()
   @UseGuards(JwtAuthGuard)
   @ApiBearerAuth()
   @ApiOperation({
      summary: 'Create Catalog Image',
      description:
         'Create a new catalog image',
   })
   @ApiBody({
      type: CreateProductImageDto,
   })
   @SwaggerCreated({
      message:
         'Catalog image created successfully',
      data: {
         id: 1,
         productId: 1,
         imageUrl:
            'https://example.com/images/keyboard.jpg',
         sortOrder: 1,
         createdAt:
            '2026-06-17T00:00:00.000Z',
         updatedAt:
            '2026-06-17T00:00:00.000Z',
      },
   })
   @SwaggerBadRequest(
      'Invalid catalog image data',
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
      summary: 'Get Catalog Images',
      description:
         'Retrieve all catalog images',
   })
   @SwaggerSuccess({
      data: [
         {
            id: 1,
            productId: 1,
            imageUrl:
               'https://example.com/images/keyboard.jpg',
            sortOrder: 1,
         },
      ],
   })
   findAll() {
      return this.productImagesService.findAll();
   }

   @Get(':id')
   @ApiOperation({
      summary: 'Get Catalog Image',
      description:
         'Retrieve catalog image by id',
   })
   @SwaggerSuccess({
      data: {
         id: 1,
         productId: 1,
         imageUrl:
            'https://example.com/images/keyboard.jpg',
         sortOrder: 1,
      },
   })
   @SwaggerNotFound(
      'Catalog image not found',
   )
   findOne(
      @Param(
         'id',
         ParseIntPipe,
      )
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
      summary: 'Update Catalog Image',
      description:
         'Update catalog image by id',
   })
   @ApiBody({
      type: UpdateProductImageDto,
   })
   @SwaggerSuccess({
      message:
         'Catalog image updated successfully',
      data: {
         id: 1,
         productId: 1,
         imageUrl:
            'https://example.com/images/keyboard-updated.jpg',
         sortOrder: 1,
      },
   })
   @SwaggerNotFound(
      'Catalog image not found',
   )
   @SwaggerUnauthorized()
   update(
      @Param(
         'id',
         ParseIntPipe,
      )
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
      summary: 'Delete Catalog Image',
      description:
         'Delete catalog image by id',
   })
   @SwaggerSuccess({
      message:
         'Catalog image deleted successfully',
   })
   @SwaggerNotFound(
      'Catalog image not found',
   )
   @SwaggerUnauthorized()
   remove(
      @Param(
         'id',
         ParseIntPipe,
      )
      id: number,
   ) {
      return this.productImagesService.remove(
         id,
      );
   }
}