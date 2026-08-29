// categories.seed.ts

import { AppType } from '@prisma/client';

export async function seedCategories(prisma: any) {
  await prisma.category.createMany({
    data: [
      {
        appType: AppType.BURGER,
        name: 'Beef Burger',
      },
      {
        appType: AppType.BURGER,
        name: 'Chicken Burger',
      },
      {
        appType: AppType.BURGER,
        name: 'Cheese Burger',
      },
      {
        appType: AppType.BURGER,
        name: 'BBQ Burger',
      },
      {
        appType: AppType.BURGER,
        name: 'Signature Burger',
      },
    ],
    skipDuplicates: true,
  });
}
