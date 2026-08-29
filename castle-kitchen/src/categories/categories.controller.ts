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

@ApiTags('Menu Categories')
@Controller('menu-categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({
    summary: 'Get Menu Categories',
    description: 'Retrieve all menu categories',
  })
  @SwaggerSuccess({
    data: [
      {
        id: 8,
        name: 'Steaks',
        description: 'Steak menu category',
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
    summary: 'Get Menu Category',
    description: 'Retrieve menu category by id',
  })
  @SwaggerSuccess({
    data: {
      id: 8,
      name: 'Steaks',
      description: 'Steak menu category',
    },
  })
  @SwaggerNotFound('Menu category not found')
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
    summary: 'Create Menu Category',
    description: 'Create new menu category (admin only)',
  })
  @ApiBody({
    type: CreateCategoryDto,
  })
  @SwaggerCreated({
    message: 'Menu category created successfully',
    data: {
      id: 8,
      name: 'Steaks',
      description: 'Steak menu category',
    },
  })
  @SwaggerBadRequest('Menu category already exists')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can create menu category')
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
    summary: 'Update Menu Category',
    description: 'Update menu category by id (admin only)',
  })
  @ApiBody({
    type: UpdateCategoryDto,
  })
  @SwaggerSuccess({
    message: 'Menu category updated successfully',
    data: {
      id: 8,
      name: 'Steaks',
      description: 'Updated steak menu category',
    },
  })
  @SwaggerNotFound('Menu category not found')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can update menu category')
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
    summary: 'Delete Menu Category',
    description: 'Delete menu category by id (admin only)',
  })
  @SwaggerSuccess({
    message: 'Menu category deleted successfully',
  })
  @SwaggerNotFound('Menu category not found')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can delete menu category')
  remove(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.categoriesService.remove(id);
  }
}
