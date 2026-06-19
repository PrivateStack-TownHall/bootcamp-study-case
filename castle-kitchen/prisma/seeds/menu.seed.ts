import { AppType } from '@prisma/client';

export async function seedMenu(
   prisma: any,
) {
   await prisma.product.createMany({
      data: [
         // =========================
         // STEAKS (Category 8)
         // Product ID: 30 - 39
         // =========================

         {
            categoryId: 8,
            appType: AppType.RESTAURANT,
            name: 'Sirloin Steak',
            description:
               'Juicy grilled sirloin steak',
            price: 150000,
            stock: 50,
         },

         {
            categoryId: 8,
            appType: AppType.RESTAURANT,
            name: 'Rib Eye Steak',
            description:
               'Tender rib eye steak',
            price: 185000,
            stock: 40,
         },

         {
            categoryId: 8,
            appType: AppType.RESTAURANT,
            name: 'Tenderloin Steak',
            description:
               'Premium tenderloin cut',
            price: 220000,
            stock: 35,
         },

         {
            categoryId: 8,
            appType: AppType.RESTAURANT,
            name: 'T-Bone Steak',
            description:
               'Classic bone-in steak',
            price: 250000,
            stock: 25,
         },

         {
            categoryId: 8,
            appType: AppType.RESTAURANT,
            name: 'Wagyu Steak',
            description:
               'Premium Japanese wagyu beef',
            price: 450000,
            stock: 15,
         },

         {
            categoryId: 8,
            appType: AppType.RESTAURANT,
            name: 'Tomahawk Steak',
            description:
               'Large bone-in rib steak',
            price: 550000,
            stock: 10,
         },

         {
            categoryId: 8,
            appType: AppType.RESTAURANT,
            name: 'Porterhouse Steak',
            description:
               'Premium porterhouse cut',
            price: 350000,
            stock: 20,
         },

         {
            categoryId: 8,
            appType: AppType.RESTAURANT,
            name: 'New York Strip Steak',
            description:
               'Classic striploin steak',
            price: 210000,
            stock: 30,
         },

         {
            categoryId: 8,
            appType: AppType.RESTAURANT,
            name: 'Flank Steak',
            description:
               'Flavorful flank steak',
            price: 165000,
            stock: 30,
         },

         {
            categoryId: 8,
            appType: AppType.RESTAURANT,
            name: 'Skirt Steak',
            description:
               'Tender grilled skirt steak',
            price: 170000,
            stock: 30,
         },

         // =========================
         // DRINKS (Category 9)
         // Product ID: 40 - 44
         // =========================

         {
            categoryId: 9,
            appType: AppType.RESTAURANT,
            name: 'Coca Cola',
            description:
               'Refreshing cold soft drink',
            price: 18000,
            stock: 150,
         },

         {
            categoryId: 9,
            appType: AppType.RESTAURANT,
            name: 'Lemon Tea',
            description:
               'Fresh brewed lemon tea',
            price: 22000,
            stock: 150,
         },

         {
            categoryId: 9,
            appType: AppType.RESTAURANT,
            name: 'Iced Coffee',
            description:
               'Chilled premium coffee',
            price: 28000,
            stock: 120,
         },

         {
            categoryId: 9,
            appType: AppType.RESTAURANT,
            name: 'Mineral Water',
            description:
               'Pure bottled water',
            price: 12000,
            stock: 300,
         },

         {
            categoryId: 9,
            appType: AppType.RESTAURANT,
            name: 'Orange Juice',
            description:
               'Freshly squeezed orange juice',
            price: 25000,
            stock: 100,
         },

         // =========================
         // DESSERTS (Category 10)
         // Product ID: 45 - 49
         // =========================

         {
            categoryId: 10,
            appType: AppType.RESTAURANT,
            name: 'Chocolate Lava Cake',
            description:
               'Warm chocolate cake with molten center',
            price: 45000,
            stock: 80,
         },

         {
            categoryId: 10,
            appType: AppType.RESTAURANT,
            name: 'Cheesecake',
            description:
               'Classic creamy cheesecake',
            price: 50000,
            stock: 80,
         },

         {
            categoryId: 10,
            appType: AppType.RESTAURANT,
            name: 'Vanilla Ice Cream',
            description:
               'Premium vanilla ice cream',
            price: 25000,
            stock: 100,
         },

         {
            categoryId: 10,
            appType: AppType.RESTAURANT,
            name: 'Brownie Sundae',
            description:
               'Chocolate brownie with ice cream',
            price: 42000,
            stock: 70,
         },

         {
            categoryId: 10,
            appType: AppType.RESTAURANT,
            name: 'Tiramisu',
            description:
               'Classic Italian dessert',
            price: 55000,
            stock: 60,
         },

         // =========================
         // SIDES (Category 11)
         // Product ID: 50 - 54
         // =========================

         {
            categoryId: 11,
            appType: AppType.RESTAURANT,
            name: 'French Fries',
            description:
               'Crispy golden fries',
            price: 30000,
            stock: 120,
         },

         {
            categoryId: 11,
            appType: AppType.RESTAURANT,
            name: 'Mashed Potato',
            description:
               'Creamy mashed potatoes',
            price: 35000,
            stock: 100,
         },

         {
            categoryId: 11,
            appType: AppType.RESTAURANT,
            name: 'Onion Rings',
            description:
               'Crispy onion rings',
            price: 32000,
            stock: 120,
         },

         {
            categoryId: 11,
            appType: AppType.RESTAURANT,
            name: 'Grilled Vegetables',
            description:
               'Seasonal grilled vegetables',
            price: 40000,
            stock: 80,
         },

         {
            categoryId: 11,
            appType: AppType.RESTAURANT,
            name: 'Garlic Bread',
            description:
               'Toasted garlic bread',
            price: 25000,
            stock: 120,
         },
      ],
   });

   console.log(
      '✅ 25 menu items seeded',
   );
}