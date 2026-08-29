import { PrismaClient } from '@prisma/client';

import { seedUsers } from './seeds/users.seed';
import { seedCategories } from './seeds/categories.seed';
import { seedMenu } from './seeds/menu.seed';
import { seedMenuImages } from './seeds/menu-images.seed';
import { seedReviews } from './seeds/reviews.seed';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Start Seeding...');

  await seedUsers(prisma);

  await seedCategories(prisma);

  await seedMenu(prisma);

  await seedMenuImages(prisma);

  await seedReviews(prisma);

  console.log('✅ Seeding Completed');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);

    await prisma.$disconnect();

    process.exit(1);
  });
