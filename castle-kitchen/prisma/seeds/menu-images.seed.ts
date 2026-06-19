export async function seedMenuImages(
   prisma: any,
) {
   await prisma.productImage.createMany({
      data: [
         // =========================
         // STEAKS
         // Product ID: 30 - 39
         // =========================

         {
            productId: 30,
            imageUrl:
               'https://images.unsplash.com/photo-1544025162-d76694265947',
            sortOrder: 1,
         },
         {
            productId: 30,
            imageUrl:
               'https://images.unsplash.com/photo-1558030006-450675393462',
            sortOrder: 2,
         },

         {
            productId: 31,
            imageUrl:
               'https://images.unsplash.com/photo-1600891964092-4316c288032e',
            sortOrder: 1,
         },
         {
            productId: 31,
            imageUrl:
               'https://images.unsplash.com/photo-1546833999-b9f581a1996d',
            sortOrder: 2,
         },

         {
            productId: 32,
            imageUrl:
               'https://images.unsplash.com/photo-1546964124-0cce460f38ef',
            sortOrder: 1,
         },
         {
            productId: 32,
            imageUrl:
               'https://images.unsplash.com/photo-1512152272829-e3139592d56f',
            sortOrder: 2,
         },

         {
            productId: 33,
            imageUrl:
               'https://images.unsplash.com/photo-1529692236671-f1dcde7cfd2c',
            sortOrder: 1,
         },
         {
            productId: 33,
            imageUrl:
               'https://images.unsplash.com/photo-1551024506-0bccd828d307',
            sortOrder: 2,
         },

         {
            productId: 34,
            imageUrl:
               'https://images.unsplash.com/photo-1551183053-bf91a1d81141',
            sortOrder: 1,
         },
         {
            productId: 34,
            imageUrl:
               'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
            sortOrder: 2,
         },

         {
            productId: 35,
            imageUrl:
               'https://images.unsplash.com/photo-1547592180-85f173990554',
            sortOrder: 1,
         },
         {
            productId: 35,
            imageUrl:
               'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
            sortOrder: 2,
         },

         {
            productId: 36,
            imageUrl:
               'https://images.unsplash.com/photo-1558030134-2f8f4f8c4b73',
            sortOrder: 1,
         },
         {
            productId: 36,
            imageUrl:
               'https://images.unsplash.com/photo-1544025162-d76694265947',
            sortOrder: 2,
         },

         {
            productId: 37,
            imageUrl:
               'https://images.unsplash.com/photo-1546964124-0cce460f38ef',
            sortOrder: 1,
         },
         {
            productId: 37,
            imageUrl:
               'https://images.unsplash.com/photo-1600891964092-4316c288032e',
            sortOrder: 2,
         },

         {
            productId: 38,
            imageUrl:
               'https://images.unsplash.com/photo-1512152272829-e3139592d56f',
            sortOrder: 1,
         },
         {
            productId: 38,
            imageUrl:
               'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
            sortOrder: 2,
         },

         {
            productId: 39,
            imageUrl:
               'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
            sortOrder: 1,
         },
         {
            productId: 39,
            imageUrl:
               'https://images.unsplash.com/photo-1547592180-85f173990554',
            sortOrder: 2,
         },

         // =========================
         // DRINKS
         // Product ID: 40 - 44
         // =========================

         {
            productId: 40,
            imageUrl:
               'https://images.unsplash.com/photo-1622483767028-3f66f32aef97',
            sortOrder: 1,
         },
         {
            productId: 40,
            imageUrl:
               'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd',
            sortOrder: 2,
         },

         {
            productId: 41,
            imageUrl:
               'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd',
            sortOrder: 1,
         },
         {
            productId: 41,
            imageUrl:
               'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
            sortOrder: 2,
         },

         {
            productId: 42,
            imageUrl:
               'https://images.unsplash.com/photo-1517701604599-bb29b565090c',
            sortOrder: 1,
         },
         {
            productId: 42,
            imageUrl:
               'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
            sortOrder: 2,
         },

         {
            productId: 43,
            imageUrl:
               'https://images.unsplash.com/photo-1564419320461-6870880221ad',
            sortOrder: 1,
         },
         {
            productId: 43,
            imageUrl:
               'https://images.unsplash.com/photo-1523362628745-0c100150b504',
            sortOrder: 2,
         },

         {
            productId: 44,
            imageUrl:
               'https://images.unsplash.com/photo-1600271886742-f049cd451bba',
            sortOrder: 1,
         },
         {
            productId: 44,
            imageUrl:
               'https://images.unsplash.com/photo-1553530666-ba11a7da3888',
            sortOrder: 2,
         },

         // =========================
         // DESSERTS
         // Product ID: 45 - 49
         // =========================

         {
            productId: 45,
            imageUrl:
               'https://images.unsplash.com/photo-1563805042-7684c019e1cb',
            sortOrder: 1,
         },
         {
            productId: 45,
            imageUrl:
               'https://images.unsplash.com/photo-1551024601-bec78aea704b',
            sortOrder: 2,
         },

         {
            productId: 46,
            imageUrl:
               'https://images.unsplash.com/photo-1533134242443-d4fd215305ad',
            sortOrder: 1,
         },
         {
            productId: 46,
            imageUrl:
               'https://images.unsplash.com/photo-1519864600265-abb23847ef2c',
            sortOrder: 2,
         },

         {
            productId: 47,
            imageUrl:
               'https://images.unsplash.com/photo-1488900128323-21503983a07e',
            sortOrder: 1,
         },
         {
            productId: 47,
            imageUrl:
               'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f',
            sortOrder: 2,
         },

         {
            productId: 48,
            imageUrl:
               'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e',
            sortOrder: 1,
         },
         {
            productId: 48,
            imageUrl:
               'https://images.unsplash.com/photo-1551024506-0bccd828d307',
            sortOrder: 2,
         },

         {
            productId: 49,
            imageUrl:
               'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
            sortOrder: 1,
         },
         {
            productId: 49,
            imageUrl:
               'https://images.unsplash.com/photo-1519869325930-281384150729',
            sortOrder: 2,
         },

         // =========================
         // SIDES
         // Product ID: 50 - 54
         // =========================

         {
            productId: 50,
            imageUrl:
               'https://images.unsplash.com/photo-1576107232684-1279f390859f',
            sortOrder: 1,
         },
         {
            productId: 50,
            imageUrl:
               'https://images.unsplash.com/photo-1518013431117-eb1465fa5752',
            sortOrder: 2,
         },

         {
            productId: 51,
            imageUrl:
               'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d',
            sortOrder: 1,
         },
         {
            productId: 51,
            imageUrl:
               'https://images.unsplash.com/photo-1547592166-23ac45744acd',
            sortOrder: 2,
         },

         {
            productId: 52,
            imageUrl:
               'https://images.unsplash.com/photo-1639024471283-03518883512d',
            sortOrder: 1,
         },
         {
            productId: 52,
            imageUrl:
               'https://images.unsplash.com/photo-1551024601-bec78aea704b',
            sortOrder: 2,
         },

         {
            productId: 53,
            imageUrl:
               'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
            sortOrder: 1,
         },
         {
            productId: 53,
            imageUrl:
               'https://images.unsplash.com/photo-1547592180-85f173990554',
            sortOrder: 2,
         },

         {
            productId: 54,
            imageUrl:
               'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c',
            sortOrder: 1,
         },
         {
            productId: 54,
            imageUrl:
               'https://images.unsplash.com/photo-1509440159596-0249088772ff',
            sortOrder: 2,
         },
      ],
   });

   console.log(
      '✅ 50 menu images seeded',
   );
}