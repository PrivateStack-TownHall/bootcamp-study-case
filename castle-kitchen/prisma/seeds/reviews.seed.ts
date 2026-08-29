export async function seedReviews(prisma: any) {
  await prisma.review.createMany({
    data: [
      {
        userId: 8,
        productId: 30,
        rating: 5,
        comment: 'Perfectly cooked sirloin steak with excellent flavor.',
      },

      {
        userId: 9,
        productId: 31,
        rating: 5,
        comment: 'The rib eye was tender, juicy, and worth every bite.',
      },

      {
        userId: 8,
        productId: 32,
        rating: 4,
        comment: 'Tenderloin was cooked nicely and very flavorful.',
      },

      {
        userId: 9,
        productId: 34,
        rating: 5,
        comment: 'Wagyu steak was absolutely amazing and melted in my mouth.',
      },

      {
        userId: 8,
        productId: 35,
        rating: 5,
        comment: 'Tomahawk steak was massive and perfect for sharing.',
      },

      {
        userId: 9,
        productId: 37,
        rating: 4,
        comment: 'New York Strip had a great balance of tenderness and flavor.',
      },

      {
        userId: 8,
        productId: 41,
        rating: 5,
        comment: 'Refreshing lemon tea that paired perfectly with the steak.',
      },

      {
        userId: 9,
        productId: 45,
        rating: 5,
        comment: 'Chocolate lava cake was rich, warm, and delicious.',
      },

      {
        userId: 8,
        productId: 46,
        rating: 4,
        comment: 'Cheesecake was creamy and had a smooth texture.',
      },

      {
        userId: 9,
        productId: 50,
        rating: 5,
        comment: 'French fries were crispy on the outside and soft inside.',
      },
    ],
  });

  console.log('✅ 10 reviews seeded');
}
