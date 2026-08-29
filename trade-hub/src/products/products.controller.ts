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

@ApiTags('Catalog')
@Controller('catalog')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create Catalog Item',
    description: 'Create a new catalog item (admin only)',
  })
  @ApiBody({
    type: CreateProductDto,
  })
  @SwaggerCreated({
    message: 'Catalog item created successfully',
    data: {
      id: 1,
      categoryId: 1,
      appType: 'ECOMMERCE',
      name: 'Gaming Keyboard',
      description: 'Mechanical gaming keyboard',
      price: 500000,
      stock: 50,
      isActive: true,
      createdAt: '2026-06-17T00:00:00.000Z',
      updatedAt: '2026-06-17T00:00:00.000Z',
    },
  })
  @SwaggerBadRequest('Invalid catalog data')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can create catalog item')
  create(
    @Body()
    dto: CreateProductDto,
  ) {
    return this.productsService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get Catalog',
    description: 'Retrieve catalog items with pagination, search and sorting',
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
        appType: 'ECOMMERCE',
        name: 'Gaming Keyboard',
        description: 'Mechanical gaming keyboard',
        price: 500000,
        stock: 50,
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
    summary: 'Get Catalog Item',
    description: 'Retrieve catalog item detail by id',
  })
  @SwaggerSuccess({
    data: {
      id: 1,
      categoryId: 1,
      appType: 'ECOMMERCE',
      name: 'Gaming Keyboard',
      description: 'Mechanical gaming keyboard',
      price: 500000,
      stock: 50,
      isActive: true,
      category: {
        id: 1,
        name: 'Electronics',
      },
      images: [],
    },
  })
  @SwaggerNotFound('Catalog item not found')
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
    summary: 'Update Catalog Item',
    description: 'Update catalog item by id (admin only)',
  })
  @ApiBody({
    type: UpdateProductDto,
  })
  @SwaggerSuccess({
    message: 'Catalog item updated successfully',
    data: {
      id: 1,
      categoryId: 1,
      appType: 'ECOMMERCE',
      name: 'Gaming Keyboard Pro',
      description: 'Updated gaming keyboard',
      price: 600000,
      stock: 40,
      isActive: true,
    },
  })
  @SwaggerNotFound('Catalog item not found')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can update catalog item')
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
    summary: 'Delete Catalog Item',
    description: 'Delete catalog item by id (admin only)',
  })
  @SwaggerSuccess({
    message: 'Catalog item deleted successfully',
  })
  @SwaggerNotFound('Catalog item not found')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can delete catalog item')
  remove(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.productsService.remove(id);
  }
}
