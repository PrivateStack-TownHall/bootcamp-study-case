// burger-images.seed.ts

export async function seedBurgerImages(prisma: any) {
  await prisma.productImage.createMany({
    data: [
      {
        productId: 85,
        imageUrl:
          'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
        sortOrder: 1,
      },
      {
        productId: 86,
        imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
        sortOrder: 1,
      },
      {
        productId: 87,
        imageUrl:
          'https://images.unsplash.com/photo-1571091718767-18b5b1457add',
        sortOrder: 1,
      },
      {
        productId: 88,
        imageUrl:
          'https://images.unsplash.com/photo-1586190848861-99aa4a171e90',
        sortOrder: 1,
      },
      {
        productId: 89,
        imageUrl: 'https://images.unsplash.com/photo-1550317138-10000687a72b',
        sortOrder: 1,
      },
      {
        productId: 90,
        imageUrl:
          'https://images.unsplash.com/photo-1520072959219-c595dc870360',
        sortOrder: 1,
      },
      {
        productId: 91,
        imageUrl:
          'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5',
        sortOrder: 1,
      },
      {
        productId: 92,
        imageUrl:
          'https://images.unsplash.com/photo-1606755962773-d324e0a13086',
        sortOrder: 1,
      },
      {
        productId: 93,
        imageUrl: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b',
        sortOrder: 1,
      },
      {
        productId: 94,
        imageUrl:
          'https://images.unsplash.com/photo-1610614819513-58e34989848b',
        sortOrder: 1,
      },
    ],
  });

  console.log('✅ 10 burger images seeded');
}
