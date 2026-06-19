import { AppType } from '@prisma/client';

export async function seedCategories(
   prisma: any,
) {
   await prisma.category.createMany({
      data: [
         {
            appType:
               AppType.RESTAURANT,
            name: 'Steaks',
         },

         {
            appType:
               AppType.RESTAURANT,
            name: 'Drinks',
         },

         {
            appType:
               AppType.RESTAURANT,
            name: 'Desserts',
         },

         {
            appType:
               AppType.RESTAURANT,
            name: 'Sides',
         },

         {
            appType:
               AppType.RESTAURANT,
            name: 'Chef Specials',
         },
      ],
      skipDuplicates: true,
   });

   console.log(
      '✅ 5 categories seeded',
   );
}