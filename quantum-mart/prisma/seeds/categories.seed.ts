// inventory-categories.seed.ts

import { AppType } from '@prisma/client';

export async function seedCategories(
   prisma: any,
) {
   await prisma.category.createMany({
      data: [
         {
            appType: AppType.MART,
            name: 'AI Devices',
         },
         {
            appType: AppType.MART,
            name: 'Smart Wearables',
         },
         {
            appType: AppType.MART,
            name: 'VR & AR',
         },
         {
            appType: AppType.MART,
            name: 'Drones',
         },
         {
            appType: AppType.MART,
            name: 'Smart Home',
         },
         {
            appType: AppType.MART,
            name: 'Robotics',
         },
         {
            appType: AppType.MART,
            name: 'Productivity Tech',
         },
         {
            appType: AppType.MART,
            name: 'Future Gadgets',
         },
         {
            appType: AppType.MART,
            name: 'Gaming Tech',
         },
         {
            appType: AppType.MART,
            name: 'Creator Tech',
         },
      ],
      skipDuplicates: true,
   });

   console.log(
      '✅ 10 inventory categories seeded',
   );
}