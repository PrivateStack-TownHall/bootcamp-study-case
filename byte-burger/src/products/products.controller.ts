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

@ApiTags('Burgers')
@Controller('burgers')
export class ProductsController {
   constructor(
      private readonly productsService: ProductsService,
   ) { }

   @Post()
   @UseGuards(JwtAuthGuard)
   @ApiBearerAuth()
   @ApiOperation({
      summary: 'Create Burger',
      description:
         'Create a new burger',
   })
   @ApiBody({
      type: CreateProductDto,
   })
   @SwaggerCreated({
      id: 1,
      categoryId: 1,
      appType: 'BURGER',
      name: 'Double Cheese Burger',
      description:
         'Juicy beef burger with double cheddar cheese',
      price: 55000,
      stock: 100,
      isActive: true,
      createdAt:
         '2026-06-17T00:00:00.000Z',
      updatedAt:
         '2026-06-17T00:00:00.000Z',
   })
   @SwaggerBadRequest(
      'Invalid burger data',
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
      summary: 'Get Burgers',
      description:
         'Retrieve burgers with pagination, search and sorting',
   })
   @SwaggerSuccess({
      page: 1,
      limit: 10,
      total: 12,
      data: [
         {
            id: 1,
            categoryId: 1,
            appType: 'BURGER',
            name: 'Double Cheese Burger',
            description:
               'Juicy beef burger with double cheddar cheese',
            price: 55000,
            stock: 100,
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
      summary: 'Get Burger',
      description:
         'Retrieve burger detail by id',
   })
   @SwaggerSuccess({
      id: 1,
      categoryId: 1,
      appType: 'BURGER',
      name: 'Double Cheese Burger',
      description:
         'Juicy beef burger with double cheddar cheese',
      price: 55000,
      stock: 100,
      isActive: true,
      category: {
         id: 1,
         name: 'Beef Burger',
      },
      images: [],
   })
   @SwaggerNotFound(
      'Burger not found',
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
      summary: 'Update Burger',
      description:
         'Update burger by id',
   })
   @ApiBody({
      type: UpdateProductDto,
   })
   @SwaggerSuccess({
      id: 1,
      categoryId: 1,
      appType: 'BURGER',
      name: 'Updated Double Cheese Burger',
      description:
         'Updated burger description',
      price: 60000,
      stock: 90,
      isActive: true,
   })
   @SwaggerNotFound(
      'Burger not found',
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
      summary: 'Delete Burger',
      description:
         'Delete burger by id',
   })
   @SwaggerSuccess({
      message:
         'Burger deleted successfully',
   })
   @SwaggerNotFound(
      'Burger not found',
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