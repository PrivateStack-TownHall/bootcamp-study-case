import * as bcrypt from 'bcrypt';

export async function seedUsers(prisma: any) {
  const password = await bcrypt.hash('123', 10);

  await prisma.user.createMany({
    data: [
      {
        fullName: 'Oliver Harrison',
        email: 'oliver.harrison@tradehub.com',
        password,
        role: 'ADMIN',
      },

      {
        fullName: 'Ethan Parker',
        email: 'ethan.parker@tradehub.com',
        password,
        role: 'CUSTOMER',
      },

      {
        fullName: 'Sophia Bennett',
        email: 'sophia.bennett@tradehub.com',
        password,
        role: 'CUSTOMER',
      },
    ],

    skipDuplicates: true,
  });

  console.log('✅ 3 users seeded');
}
