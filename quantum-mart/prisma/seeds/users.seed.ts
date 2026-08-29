// users.seed.ts

import * as bcrypt from 'bcrypt';

export async function seedUsers(prisma: any) {
  const password = await bcrypt.hash('123', 10);

  await prisma.user.createMany({
    data: [
      // Admins

      {
        fullName: 'Jason Wong',
        email: 'jason.wong@quantummart.com',
        password,
        role: 'ADMIN',
      },
      {
        fullName: 'Michelle Chan',
        email: 'michelle.chan@quantummart.com',
        password,
        role: 'ADMIN',
      },

      // Customers

      {
        fullName: 'Ryan Lee',
        email: 'ryan.lee@quantummart.com',
        password,
        role: 'CUSTOMER',
      },
      {
        fullName: 'Emily Lau',
        email: 'emily.lau@quantummart.com',
        password,
        role: 'CUSTOMER',
      },
      {
        fullName: 'Kevin Ng',
        email: 'kevin.ng@quantummart.com',
        password,
        role: 'CUSTOMER',
      },
      {
        fullName: 'Samantha Ho',
        email: 'samantha.ho@quantummart.com',
        password,
        role: 'CUSTOMER',
      },
      {
        fullName: 'Daniel Cheung',
        email: 'daniel.cheung@quantummart.com',
        password,
        role: 'CUSTOMER',
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ 7 users seeded');
}
