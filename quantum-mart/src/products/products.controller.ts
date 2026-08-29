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

@ApiTags('Inventory')
@Controller('inventory')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create Inventory',
    description: 'Create a new inventory product (admin only)',
  })
  @ApiBody({
    type: CreateProductDto,
  })
  @SwaggerCreated({
    message: 'Inventory created successfully',
    data: {
      id: 95,
      categoryId: 23,
      appType: 'MART',
      name: 'AI Smart Assistant',
      description:
        'Voice-controlled AI assistant for productivity and automation.',
      price: 2499000,
      stock: 50,
      isActive: true,
      createdAt: '2026-06-20T00:00:00.000Z',
      updatedAt: '2026-06-20T00:00:00.000Z',
    },
  })
  @SwaggerBadRequest('Invalid inventory data')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can create inventory')
  create(
    @Body()
    dto: CreateProductDto,
  ) {
    return this.productsService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get Inventory',
    description:
      'Retrieve inventory products with pagination, search and sorting',
  })
  @SwaggerSuccess({
    meta: {
      page: 1,
      limit: 10,
      total: 25,
      totalPages: 3,
    },
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
    return this.productsService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get Inventory',
    description: 'Retrieve inventory detail by id',
  })
  @SwaggerSuccess({
    data: {
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
    },
  })
  @SwaggerNotFound('Product not found')
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
    summary: 'Update Inventory',
    description: 'Update inventory by id (admin only)',
  })
  @ApiBody({
    type: UpdateProductDto,
  })
  @SwaggerSuccess({
    message: 'Inventory updated successfully',
    data: {
      id: 95,
      categoryId: 23,
      appType: 'MART',
      name: 'AI Smart Assistant',
      description: 'Updated AI assistant with enhanced features.',
      price: 2699000,
      stock: 45,
      isActive: true,
    },
  })
  @SwaggerNotFound('Product not found')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can update inventory')
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
    summary: 'Delete Inventory',
    description: 'Delete inventory by id (admin only)',
  })
  @SwaggerSuccess({
    message: 'Inventory deleted successfully',
  })
  @SwaggerNotFound('Product not found')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can delete inventory')
  remove(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.productsService.remove(id);
  }
}
