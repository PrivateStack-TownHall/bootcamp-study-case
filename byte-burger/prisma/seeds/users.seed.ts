// users.seed.ts

import * as bcrypt from 'bcrypt';

export async function seedUsers(prisma: any) {
   const password =
      await bcrypt.hash(
         '123',
         10,
      );

   await prisma.user.createMany({
      data: [
         {
            fullName: 'Louis Dubois',
            email: 'louis.dubois@byteburger.com',
            password,
            role: 'CUSTOMER',
         },
         {
            fullName: 'Gabriel Moreau',
            email: 'gabriel.moreau@byteburger.com',
            password,
            role: 'CUSTOMER',
         },
         {
            fullName: 'Arthur Laurent',
            email: 'arthur.laurent@byteburger.com',
            password,
            role: 'CUSTOMER',
         },
         {
            fullName: 'Jules Bernard',
            email: 'jules.bernard@byteburger.com',
            password,
            role: 'CUSTOMER',
         },
         {
            fullName: 'Hugo Lefevre',
            email: 'hugo.lefevre@byteburger.com',
            password,
            role: 'CUSTOMER',
         },
      ],
      skipDuplicates: true,
   });

   console.log(
      '✅ 5 users seeded',
   );
}