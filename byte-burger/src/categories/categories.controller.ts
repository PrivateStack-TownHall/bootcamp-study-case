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

@ApiTags('Burger Categories')
@Controller('burger-categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({
    summary: 'Get Burger Categories',
    description: 'Retrieve all burger categories',
  })
  @SwaggerSuccess({
    data: [
      {
        id: 1,
        name: 'Beef Burger',
        description: 'Burger category',
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
    summary: 'Get Burger Category',
    description: 'Retrieve burger category by id',
  })
  @SwaggerSuccess({
    data: {
      id: 1,
      name: 'Beef Burger',
      description: 'Burger category',
    },
  })
  @SwaggerNotFound('Burger category not found')
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
    summary: 'Create Burger Category',
    description: 'Create new burger category (admin only)',
  })
  @ApiBody({
    type: CreateCategoryDto,
  })
  @SwaggerCreated({
    message: 'Burger category created successfully',
    data: {
      id: 1,
      name: 'Beef Burger',
      description: 'Burger category',
    },
  })
  @SwaggerBadRequest('Burger category already exists')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can create burger category')
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
    summary: 'Update Burger Category',
    description: 'Update burger category by id (admin only)',
  })
  @ApiBody({
    type: UpdateCategoryDto,
  })
  @SwaggerSuccess({
    message: 'Burger category updated successfully',
    data: {
      id: 1,
      name: 'Beef Burger',
      description: 'Updated burger category',
    },
  })
  @SwaggerNotFound('Burger category not found')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can update burger category')
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
    summary: 'Delete Burger Category',
    description: 'Delete burger category by id (admin only)',
  })
  @SwaggerSuccess({
    message: 'Burger category deleted successfully',
  })
  @SwaggerNotFound('Burger category not found')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can delete burger category')
  remove(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.categoriesService.remove(id);
  }
}
