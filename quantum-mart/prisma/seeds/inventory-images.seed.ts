// inventory-images.seed.ts

export async function seedInventoryImages(prisma: any) {
  await prisma.productImage.createMany({
    data: [
      // Product 95 - AI Smart Assistant

      {
        productId: 95,
        imageUrl:
          'https://images.unsplash.com/photo-1677442136019-21780ecad995',
        sortOrder: 1,
      },
      {
        productId: 95,
        imageUrl:
          'https://images.unsplash.com/photo-1675557009875-436f1b8f8c9c',
        sortOrder: 2,
      },

      // Product 96 - AI Translation Earbuds

      {
        productId: 96,
        imageUrl:
          'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37',
        sortOrder: 1,
      },
      {
        productId: 96,
        imageUrl:
          'https://images.unsplash.com/photo-1583394838336-acd977736f90',
        sortOrder: 2,
      },

      // Product 97 - AI Voice Recorder

      {
        productId: 97,
        imageUrl:
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
        sortOrder: 1,
      },
      {
        productId: 97,
        imageUrl:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
        sortOrder: 2,
      },

      // Product 98

      {
        productId: 98,
        imageUrl:
          'https://images.unsplash.com/photo-1579586337278-3befd40fd17a',
        sortOrder: 1,
      },
      {
        productId: 98,
        imageUrl: 'https://images.unsplash.com/photo-1544117519-31a4b719223d',
        sortOrder: 2,
      },

      // Product 99

      {
        productId: 99,
        imageUrl:
          'https://images.unsplash.com/photo-1617043786394-f977fa12eddf',
        sortOrder: 1,
      },
      {
        productId: 99,
        imageUrl:
          'https://images.unsplash.com/photo-1623998021450-85c5d5c44558',
        sortOrder: 2,
      },

      // Product 100

      {
        productId: 100,
        imageUrl:
          'https://images.unsplash.com/photo-1510017803434-a899398421b3',
        sortOrder: 1,
      },
      {
        productId: 100,
        imageUrl:
          'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6',
        sortOrder: 2,
      },

      // Product 101

      {
        productId: 101,
        imageUrl:
          'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac',
        sortOrder: 1,
      },
      {
        productId: 101,
        imageUrl:
          'https://images.unsplash.com/photo-1593508512255-86ab42a8e620',
        sortOrder: 2,
      },

      // Product 102

      {
        productId: 102,
        imageUrl:
          'https://images.unsplash.com/photo-1572635196237-14b3f281503f',
        sortOrder: 1,
      },
      {
        productId: 102,
        imageUrl:
          'https://images.unsplash.com/photo-1511499767150-a48a237f0083',
        sortOrder: 2,
      },

      // Product 103

      {
        productId: 103,
        imageUrl:
          'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d',
        sortOrder: 1,
      },
      {
        productId: 103,
        imageUrl:
          'https://images.unsplash.com/photo-1611532736597-de2d4265fba3',
        sortOrder: 2,
      },

      // Product 104

      {
        productId: 104,
        imageUrl:
          'https://images.unsplash.com/photo-1473968512647-3e447244af8f',
        sortOrder: 1,
      },
      {
        productId: 104,
        imageUrl:
          'https://images.unsplash.com/photo-1508614589041-895b88991e3e',
        sortOrder: 2,
      },

      // Product 105

      {
        productId: 105,
        imageUrl:
          'https://images.unsplash.com/photo-1521405924368-64c5b84bec60',
        sortOrder: 1,
      },
      {
        productId: 105,
        imageUrl:
          'https://images.unsplash.com/photo-1473968512647-3e447244af8f',
        sortOrder: 2,
      },

      // Product 106

      {
        productId: 106,
        imageUrl:
          'https://images.unsplash.com/photo-1508614589041-895b88991e3e',
        sortOrder: 1,
      },
      {
        productId: 106,
        imageUrl:
          'https://images.unsplash.com/photo-1521405924368-64c5b84bec60',
        sortOrder: 2,
      },

      // Product 107

      {
        productId: 107,
        imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827',
        sortOrder: 1,
      },
      {
        productId: 107,
        imageUrl:
          'https://images.unsplash.com/photo-1518770660439-4636190af475',
        sortOrder: 2,
      },

      // Product 108

      {
        productId: 108,
        imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827',
        sortOrder: 1,
      },
      {
        productId: 108,
        imageUrl:
          'https://images.unsplash.com/photo-1580894908361-967195033215',
        sortOrder: 2,
      },

      // Product 109

      {
        productId: 109,
        imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827',
        sortOrder: 1,
      },
      {
        productId: 109,
        imageUrl:
          'https://images.unsplash.com/photo-1518770660439-4636190af475',
        sortOrder: 2,
      },

      // Product 110

      {
        productId: 110,
        imageUrl:
          'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
        sortOrder: 1,
      },
      {
        productId: 110,
        imageUrl:
          'https://images.unsplash.com/photo-1535378917042-10a22c95931a',
        sortOrder: 2,
      },

      // Product 111

      {
        productId: 111,
        imageUrl:
          'https://images.unsplash.com/photo-1581578731548-c64695cc6952',
        sortOrder: 1,
      },
      {
        productId: 111,
        imageUrl:
          'https://images.unsplash.com/photo-1603796846097-bee99e4a601f',
        sortOrder: 2,
      },

      // Product 112

      {
        productId: 112,
        imageUrl:
          'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
        sortOrder: 1,
      },
      {
        productId: 112,
        imageUrl:
          'https://images.unsplash.com/photo-1535378917042-10a22c95931a',
        sortOrder: 2,
      },

      // Product 113

      {
        productId: 113,
        imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
        sortOrder: 1,
      },
      {
        productId: 113,
        imageUrl:
          'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2',
        sortOrder: 2,
      },

      // Product 114

      {
        productId: 114,
        imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
        sortOrder: 1,
      },
      {
        productId: 114,
        imageUrl:
          'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2',
        sortOrder: 2,
      },

      // Product 115

      {
        productId: 115,
        imageUrl:
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
        sortOrder: 1,
      },
      {
        productId: 115,
        imageUrl:
          'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931',
        sortOrder: 2,
      },

      // Product 116

      {
        productId: 116,
        imageUrl:
          'https://images.unsplash.com/photo-1585771724684-38269d6639fd',
        sortOrder: 1,
      },
      {
        productId: 116,
        imageUrl:
          'https://images.unsplash.com/photo-1585771724684-38269d6639fd',
        sortOrder: 2,
      },

      // Product 117

      {
        productId: 117,
        imageUrl:
          'https://images.unsplash.com/photo-1541140532154-b024d705b90a',
        sortOrder: 1,
      },
      {
        productId: 117,
        imageUrl:
          'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae',
        sortOrder: 2,
      },

      // Product 118

      {
        productId: 118,
        imageUrl:
          'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46',
        sortOrder: 1,
      },
      {
        productId: 118,
        imageUrl:
          'https://images.unsplash.com/photo-1541140532154-b024d705b90a',
        sortOrder: 2,
      },

      // Product 119

      {
        productId: 119,
        imageUrl:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
        sortOrder: 1,
      },
      {
        productId: 119,
        imageUrl:
          'https://images.unsplash.com/photo-1522199755839-a2bacb67c546',
        sortOrder: 2,
      },

      // Product 120

      {
        productId: 120,
        imageUrl:
          'https://images.unsplash.com/photo-1587614382346-4ec70e388b28',
        sortOrder: 1,
      },
      {
        productId: 120,
        imageUrl:
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
        sortOrder: 2,
      },

      // Product 121

      {
        productId: 121,
        imageUrl:
          'https://images.unsplash.com/photo-1522199755839-a2bacb67c546',
        sortOrder: 1,
      },
      {
        productId: 121,
        imageUrl:
          'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931',
        sortOrder: 2,
      },
    ],
  });

  console.log('✅ 50 inventory images seeded');
}
