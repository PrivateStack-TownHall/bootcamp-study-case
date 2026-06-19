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
            fullName: "Liam O'Sullivan",
            email: 'liam.osullivan@castlekitchen.com',
            password,
            role: 'CUSTOMER',
         },
         {
            fullName: 'Aoife Murphy',
            email: 'aoife.murphy@castlekitchen.com',
            password,
            role: 'CUSTOMER',
         }
      ],
      skipDuplicates: true,
   });
}