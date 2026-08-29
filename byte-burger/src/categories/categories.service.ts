import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { AppType } from '@prisma/client';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCategoryDto) {
    const category = await this.prisma.category.create({
      data: {
        appType: AppType.BURGER,
        name: dto.name,
        description: dto.description,
      },
    });

    return {
      message: 'Burger category created successfully',
      data: category,
    };
  }

  async findAll() {
    const categories = await this.prisma.category.findMany({
      where: {
        appType: AppType.BURGER,
      },

      orderBy: {
        id: 'desc',
      },
    });

    return {
      data: categories,
    };
  }

  async findOne(id: number) {
    const category = await this.prisma.category.findFirst({
      where: {
        id,
        appType: AppType.BURGER,
      },
    });

    if (!category) {
      throw new NotFoundException('Burger category not found');
    }

    return {
      data: category,
    };
  }

  async update(id: number, dto: UpdateCategoryDto) {
    await this.findOne(id);

    const category = await this.prisma.category.update({
      where: {
        id,
        appType: AppType.BURGER,
      },
      data: dto,
    });

    return {
      message: 'Burger category updated successfully',
      data: category,
    };
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.category.delete({
      where: {
        id,
      },
    });

    return {
      message: 'Burger category deleted successfully',
    };
  }
}
