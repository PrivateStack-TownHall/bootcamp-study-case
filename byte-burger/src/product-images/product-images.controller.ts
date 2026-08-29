// product-images.controller.ts

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

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

import { ProductImagesService } from './product-images.service';

import { CreateProductImageDto } from './dto/create-product-image.dto';
import { UpdateProductImageDto } from './dto/update-product-image.dto';

import {
  SwaggerCreated,
  SwaggerForbidden,
  SwaggerNotFound,
  SwaggerSuccess,
  SwaggerUnauthorized,
} from '../common/swagger/swagger-response';

@ApiTags('Burger Images')
@Controller('burger-images')
export class ProductImagesController {
  constructor(private readonly productImagesService: ProductImagesService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create Burger Image',
    description: 'Create new burger image (admin only)',
  })
  @ApiBody({
    type: CreateProductImageDto,
  })
  @SwaggerCreated({
    message: 'Burger image created successfully',
    data: {
      id: 1,
      productId: 1,
      imageUrl: 'https://example.com/double-cheese-burger.jpg',
      sortOrder: 1,
    },
  })
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can create burger image')
  create(
    @Body()
    dto: CreateProductImageDto,
  ) {
    return this.productImagesService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get Burger Images',
    description: 'Retrieve all burger images',
  })
  @SwaggerSuccess({
    data: [
      {
        id: 1,
        productId: 1,
        imageUrl: 'https://example.com/double-cheese-burger.jpg',
        sortOrder: 1,
      },
    ],
  })
  findAll() {
    return this.productImagesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get Burger Image',
    description: 'Retrieve burger image by id',
  })
  @SwaggerSuccess({
    data: {
      id: 1,
      productId: 1,
      imageUrl: 'https://example.com/double-cheese-burger.jpg',
      sortOrder: 1,
    },
  })
  @SwaggerNotFound('Burger image not found')
  findOne(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.productImagesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update Burger Image',
    description: 'Update burger image by id (admin only)',
  })
  @ApiBody({
    type: UpdateProductImageDto,
  })
  @SwaggerSuccess({
    message: 'Burger image updated successfully',
    data: {
      id: 1,
      productId: 1,
      imageUrl: 'https://example.com/double-cheese-burger-updated.jpg',
      sortOrder: 1,
    },
  })
  @SwaggerNotFound('Burger image not found')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can update burger image')
  update(
    @Param('id', ParseIntPipe)
    id: number,

    @Body()
    dto: UpdateProductImageDto,
  ) {
    return this.productImagesService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Delete Burger Image',
    description: 'Delete burger image by id (admin only)',
  })
  @SwaggerSuccess({
    message: 'Burger image deleted successfully',
  })
  @SwaggerNotFound('Burger image not found')
  @SwaggerUnauthorized()
  @SwaggerForbidden('Only admin can delete burger image')
  remove(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.productImagesService.remove(id);
  }
}
