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

import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

import { ProductsService } from './products.service';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { QueryProductDto } from './dto/query-product.dto';

import {
  SwaggerBadRequest,
  SwaggerCreated,
  SwaggerForbidden,
  SwaggerNotFound,
  SwaggerSuccess,
  SwaggerUnauthorized,
} from '../common/swagger/swagger-response';

@ApiTags('Burgers')
@Controller('burgers')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create Burger',
    description: 'Create a new burger (admin only)',
  })
  @ApiBody({
    type: CreateProductDto,
  })
  @SwaggerCreated({
    message: 'Burger created successfully',
    data: {
      id: 1,
      categoryId: 1,
      appType: 'BURGER',
      name: 'Double Cheese Burger',
      description: 'Juicy beef burger with double cheddar cheese',
      price: 55000,
      stock: 100,
      isActive: true,
      createdAt: '2026-06-17T00:00:00.000Z',
      updatedAt: '2026-06-17T00:00:00.000Z',
    },
  })
  @SwaggerBadRequest('Invalid burger data')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can create burger')
  create(
    @Body()
    dto: CreateProductDto,
  ) {
    return this.productsService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get Burgers',
    description: 'Retrieve burgers with pagination, search and sorting',
  })
  @SwaggerSuccess({
    meta: {
      page: 1,
      limit: 10,
      total: 12,
      totalPages: 2,
    },
    data: [
      {
        id: 1,
        categoryId: 1,
        appType: 'BURGER',
        name: 'Double Cheese Burger',
        description: 'Juicy beef burger with double cheddar cheese',
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
    return this.productsService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get Burger',
    description: 'Retrieve burger detail by id',
  })
  @SwaggerSuccess({
    data: {
      id: 1,
      categoryId: 1,
      appType: 'BURGER',
      name: 'Double Cheese Burger',
      description: 'Juicy beef burger with double cheddar cheese',
      price: 55000,
      stock: 100,
      isActive: true,
      category: {
        id: 1,
        name: 'Beef Burger',
      },
      images: [],
    },
  })
  @SwaggerNotFound('Burger not found')
  findOne(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update Burger',
    description: 'Update burger by id (admin only)',
  })
  @ApiBody({
    type: UpdateProductDto,
  })
  @SwaggerSuccess({
    message: 'Burger updated successfully',
    data: {
      id: 1,
      categoryId: 1,
      appType: 'BURGER',
      name: 'Updated Double Cheese Burger',
      description: 'Updated burger description',
      price: 60000,
      stock: 90,
      isActive: true,
    },
  })
  @SwaggerNotFound('Burger not found')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can update burger')
  update(
    @Param('id', ParseIntPipe)
    id: number,

    @Body()
    dto: UpdateProductDto,
  ) {
    return this.productsService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Delete Burger',
    description: 'Delete burger by id (admin only)',
  })
  @SwaggerSuccess({
    message: 'Burger deleted successfully',
  })
  @SwaggerNotFound('Burger not found')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can delete burger')
  remove(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.productsService.remove(id);
  }
}
