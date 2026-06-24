import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateProductImageDto } from './dto/create-product-image.dto';
import { UpdateProductImageDto } from './dto/update-product-image.dto';
import { AppType } from '@prisma/client';

@Injectable()
export class ProductImagesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateProductImageDto) {
    const product = await this.prisma.product.findUnique({
      where: {
        id: dto.productId,
      },
    });

    if (!product) {
      throw new NotFoundException('Menu item not found');
    }

    const image = await this.prisma.productImage.create({
      data: {
        productId: dto.productId,
        imageUrl: dto.imageUrl,
        sortOrder: dto.sortOrder ?? 0,
      },

      include: {
        product: true,
      },
    });

    return {
      message: 'Menu image created successfully',

      data: image,
    };
  }

  async findAll() {
    return {
      data: await this.prisma.productImage.findMany({
        where: {
          product: {
            appType: AppType.RESTAURANT,
          },
        },
        include: {
          product: true,
        },

        orderBy: {
          sortOrder: 'asc',
        },
      }),
    };
  }

  async findOne(id: number) {
    const image = await this.prisma.productImage.findFirst({
      where: {
        id,

        product: {
          appType: AppType.RESTAURANT,
        },
      },

      include: {
        product: true,
      },
    });

    if (!image) {
      throw new NotFoundException('Menu image not found');
    }

    return {
      data: image,
    };
  }

  async update(id: number, dto: UpdateProductImageDto) {
    await this.findOne(id);

    if (dto.productId) {
      const product = await this.prisma.product.findUnique({
        where: {
          id: dto.productId,
        },
      });

      if (!product) {
        throw new NotFoundException('Menu item not found');
      }
    }

    const image = await this.prisma.productImage.update({
      where: {
        id,
      },

      data: dto,

      include: {
        product: true,
      },
    });

    return {
      message: 'Menu image updated successfully',

      data: image,
    };
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.productImage.delete({
      where: {
        id,
      },
    });

    return {
      message: 'Menu image deleted successfully',
    };
  }
}
