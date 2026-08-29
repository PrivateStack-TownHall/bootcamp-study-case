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

@ApiTags('Catalog Categories')
@Controller('catalog-categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({
    summary: 'Get Catalog Categories',
    description: 'Retrieve all catalog categories',
  })
  @SwaggerSuccess({
    data: [
      {
        id: 1,
        name: 'Electronics',
        description: 'Electronics category',
        createdAt: '2026-06-17T00:00:00.000Z',
        updatedAt: '2026-06-17T00:00:00.000Z',
      },
    ],
  })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get Catalog Category',
    description: 'Retrieve catalog category by id',
  })
  @SwaggerSuccess({
    data: {
      id: 1,
      name: 'Electronics',
      description: 'Electronics category',
    },
  })
  @SwaggerNotFound('Catalog category not found')
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
    summary: 'Create Catalog Category',
    description: 'Create new catalog category (admin only)',
  })
  @ApiBody({
    type: CreateCategoryDto,
  })
  @SwaggerCreated({
    message: 'Catalog category created successfully',
    data: {
      id: 1,
      name: 'Electronics',
      description: 'Electronics category',
    },
  })
  @SwaggerBadRequest('Catalog category already exists')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can create catalog category')
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
    summary: 'Update Catalog Category',
    description: 'Update catalog category by id (admin only)',
  })
  @ApiBody({
    type: UpdateCategoryDto,
  })
  @SwaggerSuccess({
    message: 'Catalog category updated successfully',
    data: {
      id: 1,
      name: 'Electronics',
      description: 'Updated electronics category',
    },
  })
  @SwaggerNotFound('Catalog category not found')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can update catalog category')
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
    summary: 'Delete Catalog Category',
    description: 'Delete catalog category by id (admin only)',
  })
  @SwaggerSuccess({
    message: 'Catalog category deleted successfully',
  })
  @SwaggerNotFound('Catalog category not found')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can delete catalog category')
  remove(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.categoriesService.remove(id);
  }
}
