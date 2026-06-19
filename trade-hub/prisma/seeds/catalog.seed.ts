import { AppType } from '@prisma/client';

export async function seedCatalog(
   prisma: any,
) {
   await prisma.product.createMany({
      data: [
         // Electronics (Category 13)

         {
            categoryId: 13,
            appType: AppType.ECOMMERCE,
            name: 'Portable SSD',
            description:
               'High-speed portable solid state drive',
            price: 1299000,
            stock: 35,
         },

         {
            categoryId: 13,
            appType: AppType.ECOMMERCE,
            name: 'USB-C Hub',
            description:
               'Multi-port USB-C expansion hub',
            price: 499000,
            stock: 60,
         },

         {
            categoryId: 13,
            appType: AppType.ECOMMERCE,
            name: 'Webcam Full HD',
            description:
               '1080p webcam for meetings and streaming',
            price: 699000,
            stock: 40,
         },

         {
            categoryId: 13,
            appType: AppType.ECOMMERCE,
            name: 'Power Bank 20000mAh',
            description:
               'Fast charging portable power bank',
            price: 549000,
            stock: 75,
         },

         {
            categoryId: 13,
            appType: AppType.ECOMMERCE,
            name: 'Bluetooth Speaker',
            description:
               'Portable wireless speaker',
            price: 899000,
            stock: 30,
         },

         {
            categoryId: 13,
            appType: AppType.ECOMMERCE,
            name: 'Smart Plug',
            description:
               'WiFi enabled smart plug',
            price: 299000,
            stock: 50,
         },

         // Gaming (Category 14)

         {
            categoryId: 14,
            appType: AppType.ECOMMERCE,
            name: 'Gaming Keyboard',
            description:
               'RGB mechanical gaming keyboard',
            price: 1199000,
            stock: 25,
         },

         {
            categoryId: 14,
            appType: AppType.ECOMMERCE,
            name: 'Gaming Mouse',
            description:
               'High precision gaming mouse',
            price: 799000,
            stock: 35,
         },

         {
            categoryId: 14,
            appType: AppType.ECOMMERCE,
            name: 'Gaming Headset',
            description:
               'Surround sound gaming headset',
            price: 1399000,
            stock: 20,
         },

         {
            categoryId: 14,
            appType: AppType.ECOMMERCE,
            name: 'RGB Mouse Pad',
            description:
               'Extended RGB gaming mouse pad',
            price: 349000,
            stock: 45,
         },

         {
            categoryId: 14,
            appType: AppType.ECOMMERCE,
            name: 'Streaming Microphone',
            description:
               'USB condenser microphone',
            price: 999000,
            stock: 22,
         },

         {
            categoryId: 14,
            appType: AppType.ECOMMERCE,
            name: 'Mechanical Keyboard Pro',
            description:
               'Premium hot-swappable keyboard',
            price: 1599000,
            stock: 18,
         },

         // Accessories (Category 15)

         {
            categoryId: 15,
            appType: AppType.ECOMMERCE,
            name: 'HDMI Cable',
            description:
               '4K Ultra HD HDMI cable',
            price: 99000,
            stock: 120,
         },

         {
            categoryId: 15,
            appType: AppType.ECOMMERCE,
            name: 'USB Cable',
            description:
               'Fast charging USB cable',
            price: 59000,
            stock: 150,
         },

         {
            categoryId: 15,
            appType: AppType.ECOMMERCE,
            name: 'Laptop Sleeve',
            description:
               'Protective laptop sleeve',
            price: 249000,
            stock: 70,
         },

         {
            categoryId: 15,
            appType: AppType.ECOMMERCE,
            name: 'Phone Stand',
            description:
               'Adjustable phone stand',
            price: 129000,
            stock: 80,
         },

         {
            categoryId: 15,
            appType: AppType.ECOMMERCE,
            name: 'Cable Organizer',
            description:
               'Desk cable management kit',
            price: 89000,
            stock: 90,
         },

         {
            categoryId: 15,
            appType: AppType.ECOMMERCE,
            name: 'Laptop Stand',
            description:
               'Ergonomic aluminum laptop stand',
            price: 329000,
            stock: 55,
         },

         // Networking (Category 16)

         {
            categoryId: 16,
            appType: AppType.ECOMMERCE,
            name: 'WiFi Router',
            description:
               'Dual-band wireless router',
            price: 899000,
            stock: 35,
         },

         {
            categoryId: 16,
            appType: AppType.ECOMMERCE,
            name: 'Mesh WiFi Node',
            description:
               'Expand wireless network coverage',
            price: 1199000,
            stock: 18,
         },

         {
            categoryId: 16,
            appType: AppType.ECOMMERCE,
            name: 'Network Switch',
            description:
               '8-port gigabit switch',
            price: 499000,
            stock: 40,
         },

         {
            categoryId: 16,
            appType: AppType.ECOMMERCE,
            name: 'Ethernet Cable',
            description:
               'Cat6 network cable',
            price: 49000,
            stock: 200,
         },

         {
            categoryId: 16,
            appType: AppType.ECOMMERCE,
            name: 'USB Network Adapter',
            description:
               'USB to Ethernet adapter',
            price: 179000,
            stock: 60,
         },

         {
            categoryId: 16,
            appType: AppType.ECOMMERCE,
            name: 'Wireless Access Point',
            description:
               'Business-grade access point',
            price: 1499000,
            stock: 15,
         },

         // Office (Category 17)

         {
            categoryId: 17,
            appType: AppType.ECOMMERCE,
            name: 'Office Chair',
            description:
               'Ergonomic office chair',
            price: 2499000,
            stock: 12,
         },

         {
            categoryId: 17,
            appType: AppType.ECOMMERCE,
            name: 'Desk Lamp',
            description:
               'LED adjustable desk lamp',
            price: 299000,
            stock: 50,
         },

         {
            categoryId: 17,
            appType: AppType.ECOMMERCE,
            name: 'Wireless Presenter',
            description:
               'Presentation remote control',
            price: 199000,
            stock: 40,
         },

         {
            categoryId: 17,
            appType: AppType.ECOMMERCE,
            name: 'Document Scanner',
            description:
               'High-speed document scanner',
            price: 1799000,
            stock: 10,
         },

         {
            categoryId: 17,
            appType: AppType.ECOMMERCE,
            name: 'Monitor Arm',
            description:
               'Adjustable monitor mount',
            price: 599000,
            stock: 25,
         },

         {
            categoryId: 17,
            appType: AppType.ECOMMERCE,
            name: 'Desk Organizer',
            description:
               'Multi-compartment desk organizer',
            price: 149000,
            stock: 65,
         },
      ],
   });

   console.log(
      '✅ 30 catalog items seeded',
   );
}