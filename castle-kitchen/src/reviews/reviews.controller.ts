import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { ReviewsService } from './reviews.service';

import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

import { type AuthRequest } from '../common/interfaces/auth-request.interface';

import {
  SwaggerBadRequest,
  SwaggerCreated,
  SwaggerNotFound,
  SwaggerSuccess,
  SwaggerUnauthorized,
} from '../common/swagger/swagger-response';

@ApiTags('Reviews')
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  @ApiOperation({
    summary: 'Get Reviews',
    description: 'Retrieve all menu reviews',
  })
  @SwaggerSuccess({
    data: [
      {
        id: 11,
        userId: 8,
        productId: 30,
        rating: 5,
        comment: 'Perfectly cooked sirloin steak.',
        createdAt: '2026-06-18T00:00:00.000Z',
      },
    ],
  })
  findAll() {
    return this.reviewsService.findAll();
  }

  @Get('product/:productId')
  @ApiOperation({
    summary: 'Get Reviews By Menu',
    description: 'Retrieve reviews by menu id',
  })
  @SwaggerSuccess({
    data: [
      {
        id: 11,
        userId: 8,
        productId: 30,
        rating: 5,
        comment: 'Perfectly cooked sirloin steak.',
      },
    ],
  })
  @SwaggerNotFound('Menu not found')
  findByProduct(
    @Param('productId', ParseIntPipe)
    productId: number,
  ) {
    return this.reviewsService.findByProduct(productId);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create Review',
    description: 'Create review for menu',
  })
  @ApiBody({
    type: CreateReviewDto,
  })
  @SwaggerCreated({
    message: 'Review created successfully',
    data: {
      id: 11,
      userId: 8,
      productId: 30,
      rating: 5,
      comment: 'Perfectly cooked sirloin steak.',
    },
  })
  @SwaggerBadRequest('Review already exists')
  @SwaggerUnauthorized()
  create(@Req() req: AuthRequest, @Body() dto: CreateReviewDto) {
    return this.reviewsService.create(req.user.id, dto);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update Review',
    description: 'Update review by id',
  })
  @ApiBody({
    type: UpdateReviewDto,
  })
  @SwaggerSuccess({
    message: 'Review updated successfully',
    data: {
      id: 11,
      rating: 4,
      comment: 'Great steak and friendly service.',
    },
  })
  @SwaggerNotFound('Review not found')
  @SwaggerUnauthorized()
  update(
    @Req() req: AuthRequest,

    @Param('id', ParseIntPipe)
    id: number,

    @Body()
    dto: UpdateReviewDto,
  ) {
    return this.reviewsService.update(id, req.user.id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Delete Review',
    description: 'Delete review by id',
  })
  @SwaggerSuccess({
    message: 'Review deleted successfully',
  })
  @SwaggerNotFound('Review not found')
  @SwaggerUnauthorized()
  remove(
    @Req() req: AuthRequest,

    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.reviewsService.remove(id, req.user.id);
  }
}
