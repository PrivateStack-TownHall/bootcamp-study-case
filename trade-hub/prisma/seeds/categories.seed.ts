import { AppType } from '@prisma/client';

export async function seedCategories(
   prisma: any,
) {
   await prisma.category.createMany({
      data: [
         {
            appType:
               AppType.ECOMMERCE,
            name: 'Electronics',
         },

         {
            appType:
               AppType.ECOMMERCE,
            name: 'Gaming',
         },

         {
            appType:
               AppType.ECOMMERCE,
            name: 'Accessories',
         },

         {
            appType:
               AppType.ECOMMERCE,
            name: 'Networking',
         },

         {
            appType:
               AppType.ECOMMERCE,
            name: 'Office',
         },
      ],

      skipDuplicates: true,
   });

   console.log(
      '✅ 5 catalog categories seeded',
   );
}