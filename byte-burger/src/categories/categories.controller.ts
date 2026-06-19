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

import {
   ApiBearerAuth,
   ApiBody,
   ApiOperation,
   ApiTags,
} from '@nestjs/swagger';

import { CategoriesService } from './categories.service';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import {
   SwaggerBadRequest,
   SwaggerCreated,
   SwaggerNotFound,
   SwaggerSuccess,
   SwaggerUnauthorized,
} from '../common/swagger/swagger-response';

@ApiTags('Burger Categories')
@Controller('burger-categories')
export class CategoriesController {
   constructor(
      private readonly categoriesService: CategoriesService,
   ) { }

   @Get()
   @ApiOperation({
      summary: 'Get Burger Categories',
      description:
         'Retrieve all burger categories',
   })
   @SwaggerSuccess({
      data: [
         {
            id: 1,
            name: 'Beef Burger',
            description:
               'Burger category',
            createdAt:
               '2026-06-17T00:00:00.000Z',
            updatedAt:
               '2026-06-17T00:00:00.000Z',
         },
      ],
   })
   findAll() {
      return this.categoriesService.findAll();
   }

   @Get(':id')
   @ApiOperation({
      summary: 'Get Burger Category',
      description:
         'Retrieve burger category by id',
   })
   @SwaggerSuccess({
      data: {
         id: 1,
         name: 'Beef Burger',
         description:
            'Burger category',
      },
   })
   @SwaggerNotFound(
      'Burger category not found',
   )
   findOne(
      @Param(
         'id',
         ParseIntPipe,
      )
      id: number,
   ) {
      return this.categoriesService.findOne(
         id,
      );
   }

   @Post()
   @UseGuards(JwtAuthGuard)
   @ApiBearerAuth()
   @ApiOperation({
      summary: 'Create Burger Category',
      description:
         'Create new burger category',
   })
   @ApiBody({
      type: CreateCategoryDto,
   })
   @SwaggerCreated({
      message:
         'Burger category created successfully',
      data: {
         id: 1,
         name: 'Beef Burger',
         description:
            'Burger category',
      },
   })
   @SwaggerBadRequest(
      'Burger category already exists',
   )
   @SwaggerUnauthorized()
   create(
      @Body()
      dto: CreateCategoryDto,
   ) {
      return this.categoriesService.create(
         dto,
      );
   }

   @Patch(':id')
   @UseGuards(JwtAuthGuard)
   @ApiBearerAuth()
   @ApiOperation({
      summary: 'Update Burger Category',
      description:
         'Update burger category by id',
   })
   @ApiBody({
      type: UpdateCategoryDto,
   })
   @SwaggerSuccess({
      message:
         'Burger category updated successfully',
      data: {
         id: 1,
         name: 'Beef Burger',
         description:
            'Updated burger category',
      },
   })
   @SwaggerNotFound(
      'Burger category not found',
   )
   @SwaggerUnauthorized()
   update(
      @Param(
         'id',
         ParseIntPipe,
      )
      id: number,

      @Body()
      dto: UpdateCategoryDto,
   ) {
      return this.categoriesService.update(
         id,
         dto,
      );
   }

   @Delete(':id')
   @UseGuards(JwtAuthGuard)
   @ApiBearerAuth()
   @ApiOperation({
      summary: 'Delete Burger Category',
      description:
         'Delete burger category by id',
   })
   @SwaggerSuccess({
      message:
         'Burger category deleted successfully',
   })
   @SwaggerNotFound(
      'Burger category not found',
   )
   @SwaggerUnauthorized()
   remove(
      @Param(
         'id',
         ParseIntPipe,
      )
      id: number,
   ) {
      return this.categoriesService.remove(
         id,
      );
   }
}