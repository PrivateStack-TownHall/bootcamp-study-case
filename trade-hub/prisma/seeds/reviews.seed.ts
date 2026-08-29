export async function seedReviews(prisma: any) {
  await prisma.review.createMany({
    data: [
      {
        userId: 11,
        productId: 55,
        rating: 5,
        comment: 'Excellent performance and very fast transfer speeds.',
      },

      {
        userId: 12,
        productId: 55,
        rating: 4,
        comment: 'Compact design and reliable storage solution.',
      },

      {
        userId: 11,
        productId: 56,
        rating: 5,
        comment: 'Works perfectly with my laptop and monitor setup.',
      },

      {
        userId: 12,
        productId: 57,
        rating: 4,
        comment: 'Clear image quality for meetings and streaming.',
      },

      {
        userId: 11,
        productId: 58,
        rating: 5,
        comment: 'Battery life is impressive and charges quickly.',
      },

      {
        userId: 12,
        productId: 58,
        rating: 4,
        comment: 'Good value for money and solid build quality.',
      },

      {
        userId: 11,
        productId: 61,
        rating: 5,
        comment: 'Amazing keyboard for gaming and daily work.',
      },

      {
        userId: 12,
        productId: 61,
        rating: 5,
        comment: 'RGB lighting looks fantastic and keys feel great.',
      },

      {
        userId: 11,
        productId: 63,
        rating: 4,
        comment: 'Comfortable headset with clear audio quality.',
      },

      {
        userId: 12,
        productId: 67,
        rating: 5,
        comment: 'High quality cable and stable connection.',
      },

      {
        userId: 11,
        productId: 73,
        rating: 5,
        comment: 'Strong WiFi coverage throughout the house.',
      },

      {
        userId: 12,
        productId: 73,
        rating: 4,
        comment: 'Easy setup and reliable network performance.',
      },

      {
        userId: 11,
        productId: 79,
        rating: 5,
        comment: 'Very comfortable chair for long working hours.',
      },

      {
        userId: 12,
        productId: 83,
        rating: 5,
        comment: 'Monitor arm is sturdy and easy to adjust.',
      },

      {
        userId: 11,
        productId: 83,
        rating: 4,
        comment: 'Great desk upgrade and saves a lot of space.',
      },
    ],
  });

  console.log('✅ 15 reviews seeded');
}
