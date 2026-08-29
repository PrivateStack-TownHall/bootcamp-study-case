export async function seedCatalogImages(prisma: any) {
  await prisma.productImage.createMany({
    data: [
      {
        productId: 55,
        imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef',
        sortOrder: 1,
      },

      {
        productId: 56,
        imageUrl:
          'https://images.unsplash.com/photo-1587033411391-5d9e51cce126',
        sortOrder: 1,
      },

      {
        productId: 57,
        imageUrl:
          'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04',
        sortOrder: 1,
      },

      {
        productId: 58,
        imageUrl:
          'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5',
        sortOrder: 1,
      },

      {
        productId: 59,
        imageUrl:
          'https://images.unsplash.com/photo-1589003077984-894e133dabab',
        sortOrder: 1,
      },

      {
        productId: 60,
        imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827',
        sortOrder: 1,
      },

      {
        productId: 61,
        imageUrl:
          'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae',
        sortOrder: 1,
      },

      {
        productId: 62,
        imageUrl:
          'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46',
        sortOrder: 1,
      },

      {
        productId: 63,
        imageUrl:
          'https://images.unsplash.com/photo-1599669454699-248893623440',
        sortOrder: 1,
      },

      {
        productId: 64,
        imageUrl:
          'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7',
        sortOrder: 1,
      },

      {
        productId: 65,
        imageUrl:
          'https://images.unsplash.com/photo-1590602847861-f357a9332bbc',
        sortOrder: 1,
      },

      {
        productId: 66,
        imageUrl:
          'https://images.unsplash.com/photo-1595225476474-87563907a212',
        sortOrder: 1,
      },

      {
        productId: 67,
        imageUrl:
          'https://images.unsplash.com/photo-1587829741301-dc798b83add3',
        sortOrder: 1,
      },

      {
        productId: 68,
        imageUrl:
          'https://images.unsplash.com/photo-1616578273576-e1d7b6c95f2b',
        sortOrder: 1,
      },

      {
        productId: 69,
        imageUrl:
          'https://images.unsplash.com/photo-1517336714739-489689fd1ca8',
        sortOrder: 1,
      },

      {
        productId: 70,
        imageUrl:
          'https://images.unsplash.com/photo-1586105251261-72a756497a11',
        sortOrder: 1,
      },

      {
        productId: 71,
        imageUrl:
          'https://images.unsplash.com/photo-1586953208448-b95a79798f07',
        sortOrder: 1,
      },

      {
        productId: 72,
        imageUrl:
          'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
        sortOrder: 1,
      },

      {
        productId: 73,
        imageUrl:
          'https://images.unsplash.com/photo-1606904825846-647eb07f5be2',
        sortOrder: 1,
      },

      {
        productId: 74,
        imageUrl:
          'https://images.unsplash.com/photo-1617713964959-d9a36bbc7b52',
        sortOrder: 1,
      },

      {
        productId: 75,
        imageUrl:
          'https://images.unsplash.com/photo-1563770660941-20978e870e26',
        sortOrder: 1,
      },

      {
        productId: 76,
        imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
        sortOrder: 1,
      },

      {
        productId: 77,
        imageUrl:
          'https://images.unsplash.com/photo-1625842268584-8f3296236761',
        sortOrder: 1,
      },

      {
        productId: 78,
        imageUrl:
          'https://images.unsplash.com/photo-1593640408182-31c70c8268f5',
        sortOrder: 1,
      },

      {
        productId: 79,
        imageUrl:
          'https://images.unsplash.com/photo-1505843513577-22bb7d21e455',
        sortOrder: 1,
      },

      {
        productId: 80,
        imageUrl:
          'https://images.unsplash.com/photo-1507473885765-e6ed057f782c',
        sortOrder: 1,
      },

      {
        productId: 81,
        imageUrl:
          'https://images.unsplash.com/photo-1586281380349-632531db7ed4',
        sortOrder: 1,
      },

      {
        productId: 82,
        imageUrl:
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
        sortOrder: 1,
      },

      {
        productId: 83,
        imageUrl:
          'https://images.unsplash.com/photo-1593640408182-31c70c8268f5',
        sortOrder: 1,
      },

      {
        productId: 84,
        imageUrl:
          'https://images.unsplash.com/photo-1586953208448-b95a79798f07',
        sortOrder: 1,
      },
    ],
  });

  console.log('✅ 30 product images seeded');
}
