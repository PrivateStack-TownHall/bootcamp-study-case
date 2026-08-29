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

import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CategoriesService } from './categories.service';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

import {
  SwaggerBadRequest,
  SwaggerCreated,
  SwaggerForbidden,
  SwaggerNotFound,
  SwaggerSuccess,
  SwaggerUnauthorized,
} from '../common/swagger/swagger-response';

@ApiTags('Inventory Categories')
@Controller('inventory-categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({
    summary: 'Get Inventory Categories',
    description: 'Retrieve all inventory categories',
  })
  @SwaggerSuccess({
    data: [
      {
        id: 23,
        name: 'AI Devices',
        description: 'Artificial intelligence devices',
        createdAt: '2026-06-19T00:00:00.000Z',
        updatedAt: '2026-06-19T00:00:00.000Z',
      },
    ],
  })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get Inventory Category',
    description: 'Retrieve inventory category by id',
  })
  @SwaggerSuccess({
    data: {
      id: 23,
      name: 'AI Devices',
      description: 'Artificial intelligence devices',
      createdAt: '2026-06-19T00:00:00.000Z',
      updatedAt: '2026-06-19T00:00:00.000Z',
    },
  })
  @SwaggerNotFound('Category not found')
  findOne(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.categoriesService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create Inventory Category',
    description: 'Create new inventory category (admin only)',
  })
  @ApiBody({
    type: CreateCategoryDto,
  })
  @SwaggerCreated({
    message: 'Category created successfully',
    data: {
      id: 23,
      name: 'AI Devices',
      description: 'Artificial intelligence devices',
      createdAt: '2026-06-19T00:00:00.000Z',
      updatedAt: '2026-06-19T00:00:00.000Z',
    },
  })
  @SwaggerBadRequest('Category already exists')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can create category')
  create(
    @Body()
    dto: CreateCategoryDto,
  ) {
    return this.categoriesService.create(dto);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update Inventory Category',
    description: 'Update inventory category by id (admin only)',
  })
  @ApiBody({
    type: UpdateCategoryDto,
  })
  @SwaggerSuccess({
    message: 'Category updated successfully',
    data: {
      id: 23,
      name: 'AI Devices',
      description: 'Updated artificial intelligence devices',
      createdAt: '2026-06-19T00:00:00.000Z',
      updatedAt: '2026-06-19T00:00:00.000Z',
    },
  })
  @SwaggerNotFound('Category not found')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can update category')
  update(
    @Param('id', ParseIntPipe)
    id: number,

    @Body()
    dto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Delete Inventory Category',
    description: 'Delete inventory category by id (admin only)',
  })
  @SwaggerSuccess({
    message: 'Category deleted successfully',
  })
  @SwaggerNotFound('Category not found')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can delete category')
  remove(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.categoriesService.remove(id);
  }
}
