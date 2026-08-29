// reviews.seed.ts

export async function seedReviews(prisma: any) {
  await prisma.review.createMany({
    data: [
      { userId: 13, productId: 85, rating: 5, comment: 'Excellent burger.' },
      { userId: 14, productId: 85, rating: 4, comment: 'Very tasty.' },
      { userId: 15, productId: 85, rating: 5, comment: 'Perfect beef patty.' },

      { userId: 13, productId: 86, rating: 5, comment: 'Huge and satisfying.' },
      {
        userId: 16,
        productId: 86,
        rating: 4,
        comment: 'Double patty is amazing.',
      },

      { userId: 14, productId: 87, rating: 5, comment: 'Best chicken burger.' },
      { userId: 15, productId: 87, rating: 4, comment: 'Crispy and juicy.' },
      { userId: 17, productId: 87, rating: 5, comment: 'Loved every bite.' },

      { userId: 13, productId: 88, rating: 4, comment: 'Nice spicy kick.' },
      { userId: 16, productId: 88, rating: 5, comment: 'Great flavor.' },

      { userId: 14, productId: 89, rating: 5, comment: 'Cheese overload.' },
      { userId: 15, productId: 89, rating: 4, comment: 'Very cheesy.' },
      { userId: 17, productId: 89, rating: 5, comment: 'Amazing texture.' },

      { userId: 13, productId: 90, rating: 5, comment: 'Worth every penny.' },
      { userId: 16, productId: 90, rating: 4, comment: 'Rich cheese flavor.' },

      {
        userId: 14,
        productId: 91,
        rating: 5,
        comment: 'BBQ sauce is fantastic.',
      },
      { userId: 15, productId: 91, rating: 4, comment: 'Great bacon.' },
      { userId: 17, productId: 91, rating: 5, comment: 'Highly recommended.' },

      { userId: 13, productId: 92, rating: 4, comment: 'Good smoky flavor.' },
      { userId: 16, productId: 92, rating: 5, comment: 'Loved it.' },

      { userId: 14, productId: 93, rating: 5, comment: 'Signature indeed.' },
      { userId: 15, productId: 93, rating: 5, comment: 'My favorite burger.' },
      { userId: 17, productId: 93, rating: 4, comment: 'Excellent quality.' },

      { userId: 13, productId: 94, rating: 5, comment: 'Massive burger.' },
      { userId: 16, productId: 94, rating: 5, comment: 'Best value.' },
    ],
  });

  console.log('✅ 25 reviews seeded');
}
