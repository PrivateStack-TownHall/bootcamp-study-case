// burgers.seed.ts

import { AppType } from '@prisma/client';

export async function seedBurgers(prisma: any) {
  await prisma.product.createMany({
    data: [
      {
        categoryId: 18,
        appType: AppType.BURGER,
        name: 'Classic Beef Burger',
        description: 'Classic grilled beef burger',
        price: 45000,
        stock: 100,
      },
      {
        categoryId: 18,
        appType: AppType.BURGER,
        name: 'Double Beef Burger',
        description: 'Double beef patty burger',
        price: 65000,
        stock: 80,
      },

      {
        categoryId: 19,
        appType: AppType.BURGER,
        name: 'Crispy Chicken Burger',
        description: 'Crispy fried chicken burger',
        price: 48000,
        stock: 120,
      },
      {
        categoryId: 19,
        appType: AppType.BURGER,
        name: 'Spicy Chicken Burger',
        description: 'Spicy chicken fillet burger',
        price: 52000,
        stock: 90,
      },

      {
        categoryId: 20,
        appType: AppType.BURGER,
        name: 'Double Cheese Burger',
        description: 'Double cheddar cheese burger',
        price: 55000,
        stock: 110,
      },
      {
        categoryId: 20,
        appType: AppType.BURGER,
        name: 'Triple Cheese Burger',
        description: 'Triple cheese explosion',
        price: 69000,
        stock: 70,
      },

      {
        categoryId: 21,
        appType: AppType.BURGER,
        name: 'BBQ Bacon Burger',
        description: 'BBQ sauce with crispy bacon',
        price: 72000,
        stock: 60,
      },
      {
        categoryId: 21,
        appType: AppType.BURGER,
        name: 'Smoky BBQ Burger',
        description: 'Smoky grilled BBQ burger',
        price: 63000,
        stock: 75,
      },

      {
        categoryId: 22,
        appType: AppType.BURGER,
        name: 'Byte Burger Signature',
        description: 'House signature burger',
        price: 79000,
        stock: 50,
      },
      {
        categoryId: 22,
        appType: AppType.BURGER,
        name: 'Mega Byte Burger',
        description: 'Largest burger on the menu',
        price: 89000,
        stock: 40,
      },
    ],
  });

  console.log('✅ 10 burgers seeded');
}
