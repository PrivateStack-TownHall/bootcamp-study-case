// reviews.seed.ts

export async function seedReviews(prisma: any) {
  await prisma.review.createMany({
    data: [
      {
        userId: 20,
        productId: 95,
        rating: 5,
        comment: 'AI Smart Assistant exceeded my expectations.',
      },
      {
        userId: 21,
        productId: 95,
        rating: 4,
        comment: 'Useful AI features and easy setup.',
      },

      {
        userId: 22,
        productId: 96,
        rating: 5,
        comment: 'Translation quality is surprisingly accurate.',
      },

      {
        userId: 23,
        productId: 97,
        rating: 4,
        comment: 'Great recorder for meetings and interviews.',
      },
      {
        userId: 24,
        productId: 97,
        rating: 5,
        comment: 'Automatic transcription saves a lot of time.',
      },

      {
        userId: 20,
        productId: 98,
        rating: 5,
        comment: 'Premium smartwatch with excellent battery life.',
      },

      {
        userId: 21,
        productId: 99,
        rating: 4,
        comment: 'Comfortable and lightweight smart ring.',
      },
      {
        userId: 22,
        productId: 99,
        rating: 5,
        comment: 'Sleep tracking works really well.',
      },

      {
        userId: 23,
        productId: 100,
        rating: 4,
        comment: 'Affordable fitness tracker with solid features.',
      },

      {
        userId: 24,
        productId: 101,
        rating: 5,
        comment: 'VR experience feels incredibly immersive.',
      },
      {
        userId: 20,
        productId: 101,
        rating: 4,
        comment: 'Very comfortable for long gaming sessions.',
      },

      {
        userId: 21,
        productId: 102,
        rating: 5,
        comment: 'AR Smart Glasses feel like the future.',
      },

      {
        userId: 22,
        productId: 103,
        rating: 4,
        comment: 'Mixed reality features are impressive.',
      },
      {
        userId: 23,
        productId: 103,
        rating: 5,
        comment: 'Excellent performance and display quality.',
      },

      {
        userId: 24,
        productId: 104,
        rating: 5,
        comment: 'Perfect starter drone with stable controls.',
      },

      {
        userId: 20,
        productId: 105,
        rating: 4,
        comment: 'Long flight time and smooth navigation.',
      },
      {
        userId: 21,
        productId: 105,
        rating: 5,
        comment: 'Great drone for outdoor adventures.',
      },

      {
        userId: 22,
        productId: 106,
        rating: 5,
        comment: 'Professional quality aerial footage.',
      },

      {
        userId: 23,
        productId: 107,
        rating: 4,
        comment: 'Camera quality is crystal clear.',
      },
      {
        userId: 24,
        productId: 107,
        rating: 5,
        comment: 'Easy to install and configure.',
      },

      {
        userId: 20,
        productId: 108,
        rating: 5,
        comment: 'Fingerprint unlock works flawlessly.',
      },

      {
        userId: 21,
        productId: 109,
        rating: 4,
        comment: 'Excellent smart home integration.',
      },
      {
        userId: 22,
        productId: 109,
        rating: 5,
        comment: 'Connects all my devices perfectly.',
      },

      {
        userId: 23,
        productId: 110,
        rating: 5,
        comment: 'Amazing home robot with smart features.',
      },

      {
        userId: 24,
        productId: 111,
        rating: 4,
        comment: 'Keeps my apartment spotless.',
      },
      {
        userId: 20,
        productId: 111,
        rating: 5,
        comment: 'Best robot vacuum I have owned.',
      },

      {
        userId: 21,
        productId: 112,
        rating: 4,
        comment: 'Fun robotic companion for the family.',
      },

      {
        userId: 22,
        productId: 113,
        rating: 5,
        comment: 'Perfect portable display for remote work.',
      },
      {
        userId: 23,
        productId: 113,
        rating: 4,
        comment: 'Lightweight and easy to carry.',
      },

      {
        userId: 24,
        productId: 114,
        rating: 5,
        comment: 'Feels like writing on real paper.',
      },

      {
        userId: 20,
        productId: 115,
        rating: 4,
        comment: 'Pocket projector is surprisingly bright.',
      },
      {
        userId: 21,
        productId: 115,
        rating: 5,
        comment: 'Great for presentations and movies.',
      },

      {
        userId: 22,
        productId: 116,
        rating: 4,
        comment: 'Noticeable improvement in air quality.',
      },

      {
        userId: 23,
        productId: 117,
        rating: 5,
        comment: 'Mechanical keys feel amazing.',
      },

      {
        userId: 24,
        productId: 118,
        rating: 4,
        comment: 'Responsive mouse with great accuracy.',
      },

      {
        userId: 20,
        productId: 119,
        rating: 5,
        comment: 'Excellent webcam for content creation.',
      },

      {
        userId: 21,
        productId: 120,
        rating: 5,
        comment: 'Studio quality audio for streaming.',
      },

      {
        userId: 22,
        productId: 121,
        rating: 4,
        comment: 'Lighting kit is compact and powerful.',
      },
    ],
  });

  console.log('✅ 35 reviews seeded');
}
