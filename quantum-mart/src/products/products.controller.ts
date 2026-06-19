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

@ApiTags('Inventory')
@Controller('inventory')
export class ProductsController {
   constructor(
      private readonly productsService: ProductsService,
   ) {}

   @Post()
   @UseGuards(JwtAuthGuard)
   @ApiBearerAuth()
   @ApiOperation({
      summary: 'Create Inventory',
      description:
         'Create a new inventory product',
   })
   @ApiBody({
      type: CreateProductDto,
   })
   @SwaggerCreated({
      id: 95,
      categoryId: 23,
      appType: 'MART',
      name: 'AI Smart Assistant',
      description:
         'Voice-controlled AI assistant for productivity and automation.',
      price: 2499000,
      stock: 50,
      isActive: true,
      createdAt:
         '2026-06-20T00:00:00.000Z',
      updatedAt:
         '2026-06-20T00:00:00.000Z',
   })
   @SwaggerBadRequest(
      'Invalid inventory data',
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
      summary: 'Get Inventory',
      description:
         'Retrieve inventory products with pagination, search and sorting',
   })
   @SwaggerSuccess({
      page: 1,
      limit: 10,
      total: 25,
      data: [
         {
            id: 95,
            categoryId: 23,
            appType: 'MART',
            name: 'AI Smart Assistant',
            description:
               'Voice-controlled AI assistant for productivity and automation.',
            price: 2499000,
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
      summary: 'Get Inventory',
      description:
         'Retrieve inventory detail by id',
   })
   @SwaggerSuccess({
      id: 95,
      categoryId: 23,
      appType: 'MART',
      name: 'AI Smart Assistant',
      description:
         'Voice-controlled AI assistant for productivity and automation.',
      price: 2499000,
      stock: 50,
      isActive: true,
      category: {
         id: 23,
         name: 'AI Devices',
      },
      images: [
         {
            id: 149,
            imageUrl:
               'https://images.unsplash.com/photo-1677442136019-21780ecad995',
         },
      ],
   })
   @SwaggerNotFound(
      'Product not found',
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
      summary: 'Update Inventory',
      description:
         'Update inventory by id',
   })
   @ApiBody({
      type: UpdateProductDto,
   })
   @SwaggerSuccess({
      id: 95,
      categoryId: 23,
      appType: 'MART',
      name: 'AI Smart Assistant',
      description:
         'Updated AI assistant with enhanced features.',
      price: 2699000,
      stock: 45,
      isActive: true,
   })
   @SwaggerNotFound(
      'Product not found',
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
      summary: 'Delete Inventory',
      description:
         'Delete inventory by id',
   })
   @SwaggerSuccess({
      message:
         'Product deleted successfully',
   })
   @SwaggerNotFound(
      'Product not found',
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