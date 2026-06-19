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

@ApiTags('Menu Images')
@Controller('menu-images')
export class ProductImagesController {
   constructor(
      private readonly productImagesService: ProductImagesService,
   ) { }

   @Post()
   @UseGuards(JwtAuthGuard)
   @ApiBearerAuth()
   @ApiOperation({
      summary: 'Create Menu Image',
      description:
         'Create a new menu image',
   })
   @ApiBody({
      type: CreateProductImageDto,
   })
   @SwaggerCreated({
      message:
         'Menu image created successfully',
      data: {
         id: 59,
         productId: 30,
         imageUrl:
            'https://images.unsplash.com/photo-1544025162-d76694265947',
         sortOrder: 1,
         createdAt:
            '2026-06-18T00:00:00.000Z',
         updatedAt:
            '2026-06-18T00:00:00.000Z',
      },
   })
   @SwaggerBadRequest(
      'Invalid menu image data',
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
      summary: 'Get Menu Images',
      description:
         'Retrieve all menu images',
   })
   @SwaggerSuccess({
      data: [
         {
            id: 59,
            productId: 30,
            imageUrl:
               'https://images.unsplash.com/photo-1544025162-d76694265947',
            sortOrder: 1,
         },
      ],
   })
   findAll() {
      return this.productImagesService.findAll();
   }

   @Get(':id')
   @ApiOperation({
      summary: 'Get Menu Image',
      description:
         'Retrieve menu image by id',
   })
   @SwaggerSuccess({
      data: {
         id: 59,
         productId: 30,
         imageUrl:
            'https://images.unsplash.com/photo-1544025162-d76694265947',
         sortOrder: 1,
      },
   })
   @SwaggerNotFound(
      'Menu image not found',
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
      summary: 'Update Menu Image',
      description:
         'Update menu image by id',
   })
   @ApiBody({
      type: UpdateProductImageDto,
   })
   @SwaggerSuccess({
      message:
         'Menu image updated successfully',
      data: {
         id: 59,
         productId: 30,
         imageUrl:
            'https://images.unsplash.com/photo-1544025162-d76694265947',
         sortOrder: 2,
      },
   })
   @SwaggerNotFound(
      'Menu image not found',
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
      summary: 'Delete Menu Image',
      description:
         'Delete menu image by id',
   })
   @SwaggerSuccess({
      message:
         'Menu image deleted successfully',
   })
   @SwaggerNotFound(
      'Menu image not found',
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