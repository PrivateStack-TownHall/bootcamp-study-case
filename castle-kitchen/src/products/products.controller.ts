import {
   Body,
   Controller,
   Delete,
   Get,
   Param,
   ParseIntPipe,
   Patch,
   Post,
   Query,
   UseGuards,
} from '@nestjs/common';

import {
   ApiBearerAuth,
   ApiBody,
   ApiOperation,
   ApiTags,
} from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { ProductsService } from './products.service';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { QueryProductDto } from './dto/query-product.dto';

import {
   SwaggerBadRequest,
   SwaggerCreated,
   SwaggerNotFound,
   SwaggerSuccess,
   SwaggerUnauthorized,
} from '../common/swagger/swagger-response';

@ApiTags('Menu')
@Controller('menu')
export class ProductsController {
   constructor(
      private readonly productsService: ProductsService,
   ) { }

   @Post()
   @UseGuards(JwtAuthGuard)
   @ApiBearerAuth()
   @ApiOperation({
      summary:
         'Create Menu Item',
      description:
         'Create a new menu item',
   })
   @ApiBody({
      type: CreateProductDto,
   })
   @SwaggerCreated({
      id: 30,
      categoryId: 8,
      appType: 'RESTAURANT',
      name: 'Sirloin Steak',
      description:
         'Juicy grilled sirloin steak',
      price: 150000,
      stock: 50,
      isActive: true,
      createdAt:
         '2026-06-18T00:00:00.000Z',
      updatedAt:
         '2026-06-18T00:00:00.000Z',
   })
   @SwaggerBadRequest(
      'Invalid menu item data',
   )
   @SwaggerUnauthorized()
   create(
      @Body()
      dto: CreateProductDto,
   ) {
      return this.productsService.create(
         dto,
      );
   }

   @Get()
   @ApiOperation({
      summary: 'Get Menu',
      description:
         'Retrieve menu items with pagination, search and sorting',
   })
   @SwaggerSuccess({
      page: 1,
      limit: 10,
      total: 25,
      data: [
         {
            id: 30,
            categoryId: 8,
            appType: 'RESTAURANT',
            name: 'Sirloin Steak',
            description:
               'Juicy grilled sirloin steak',
            price: 150000,
            stock: 50,
            isActive: true,
         },
      ],
   })
   findAll(
      @Query()
      query: QueryProductDto,
   ) {
      return this.productsService.findAll(
         query,
      );
   }

   @Get(':id')
   @ApiOperation({
      summary:
         'Get Menu Item',
      description:
         'Retrieve menu item detail by id',
   })
   @SwaggerSuccess({
      id: 1,
      categoryId: 1,
      appType: 'RESTAURANT',
      name: 'Sirloin Steak',
      description:
         'Premium grilled sirloin steak',
      price: 150000,
      stock: 100,
      isActive: true,
      category: {
         id: 1,
         name: 'Steaks',
      },
      images: [],
   })
   @SwaggerNotFound(
      'Menu item not found',
   )
   findOne(
      @Param(
         'id',
         ParseIntPipe,
      )
      id: number,
   ) {
      return this.productsService.findOne(
         id,
      );
   }

   @Patch(':id')
   @UseGuards(JwtAuthGuard)
   @ApiBearerAuth()
   @ApiOperation({
      summary:
         'Update Menu Item',
      description:
         'Update menu item by id',
   })
   @ApiBody({
      type: UpdateProductDto,
   })
   @SwaggerSuccess({
      id: 30,
      categoryId: 8,
      appType: 'RESTAURANT',
      name: 'Sirloin Steak',
      description:
         'Juicy grilled sirloin steak',
      price: 150000,
      stock: 50,
      isActive: true,
      category: {
         id: 8,
         name: 'Steaks',
      },
      images: [
         {
            id: 59,
            imageUrl:
               'https://images.unsplash.com/...',
            sortOrder: 1,
         },
      ],
   })
   @SwaggerNotFound(
      'Menu item not found',
   )
   @SwaggerUnauthorized()
   update(
      @Param(
         'id',
         ParseIntPipe,
      )
      id: number,

      @Body()
      dto: UpdateProductDto,
   ) {
      return this.productsService.update(
         id,
         dto,
      );
   }

   @Delete(':id')
   @UseGuards(JwtAuthGuard)
   @ApiBearerAuth()
   @ApiOperation({
      summary:
         'Delete Menu Item',
      description:
         'Delete menu item by id',
   })
   @SwaggerSuccess({
      message:
         'Menu item deleted successfully',
   })
   @SwaggerNotFound(
      'Menu item not found',
   )
   @SwaggerUnauthorized()
   remove(
      @Param(
         'id',
         ParseIntPipe,
      )
      id: number,
   ) {
      return this.productsService.remove(
         id,
      );
   }
}