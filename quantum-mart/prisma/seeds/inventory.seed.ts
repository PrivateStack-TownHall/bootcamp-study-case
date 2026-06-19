// inventory.seed.ts

import { AppType } from '@prisma/client';

export async function seedInventory(
   prisma: any,
) {
   await prisma.product.createMany({
      data: [
         // AI Devices (Category 23)

         {
            categoryId: 23,
            appType: AppType.MART,
            name: 'AI Smart Assistant',
            description: 'Voice-controlled AI assistant for productivity and automation.',
            price: 2499000,
            stock: 50,
         },
         {
            categoryId: 23,
            appType: AppType.MART,
            name: 'AI Translation Earbuds',
            description: 'Real-time multilingual translation earbuds.',
            price: 1899000,
            stock: 70,
         },
         {
            categoryId: 23,
            appType: AppType.MART,
            name: 'AI Voice Recorder',
            description: 'Smart recorder with automatic transcription.',
            price: 1599000,
            stock: 60,
         },

         // Smart Wearables (Category 24)

         {
            categoryId: 24,
            appType: AppType.MART,
            name: 'Quantum Smart Watch',
            description: 'Premium smartwatch with health tracking.',
            price: 3499000,
            stock: 40,
         },
         {
            categoryId: 24,
            appType: AppType.MART,
            name: 'Smart Ring Pro',
            description: 'Compact wearable with sleep and fitness monitoring.',
            price: 2299000,
            stock: 45,
         },
         {
            categoryId: 24,
            appType: AppType.MART,
            name: 'Health Tracking Band',
            description: 'Affordable fitness tracker with smart alerts.',
            price: 899000,
            stock: 90,
         },

         // VR & AR (Category 25)

         {
            categoryId: 25,
            appType: AppType.MART,
            name: 'VR Vision Headset',
            description: 'Immersive virtual reality headset.',
            price: 7999000,
            stock: 25,
         },
         {
            categoryId: 25,
            appType: AppType.MART,
            name: 'AR Smart Glasses',
            description: 'Augmented reality glasses for everyday use.',
            price: 9999000,
            stock: 20,
         },
         {
            categoryId: 25,
            appType: AppType.MART,
            name: 'Mixed Reality Explorer',
            description: 'Advanced mixed reality experience device.',
            price: 11999000,
            stock: 15,
         },

         // Drones (Category 26)

         {
            categoryId: 26,
            appType: AppType.MART,
            name: 'Mini Camera Drone',
            description: 'Compact drone for beginners.',
            price: 2599000,
            stock: 35,
         },
         {
            categoryId: 26,
            appType: AppType.MART,
            name: 'Explorer Drone X',
            description: 'Long-range aerial exploration drone.',
            price: 6499000,
            stock: 20,
         },
         {
            categoryId: 26,
            appType: AppType.MART,
            name: 'Aerial Pro Drone',
            description: 'Professional drone with 4K camera.',
            price: 9999000,
            stock: 12,
         },

         // Smart Home (Category 27)

         {
            categoryId: 27,
            appType: AppType.MART,
            name: 'Smart Security Camera',
            description: 'AI-powered home security monitoring.',
            price: 1299000,
            stock: 75,
         },
         {
            categoryId: 27,
            appType: AppType.MART,
            name: 'Smart Door Lock',
            description: 'Fingerprint and mobile app enabled lock.',
            price: 1999000,
            stock: 40,
         },
         {
            categoryId: 27,
            appType: AppType.MART,
            name: 'Smart Home Hub',
            description: 'Central control hub for smart devices.',
            price: 1699000,
            stock: 50,
         },

         // Robotics (Category 28)

         {
            categoryId: 28,
            appType: AppType.MART,
            name: 'Home Service Robot',
            description: 'AI assistant robot for home tasks.',
            price: 14999000,
            stock: 8,
         },
         {
            categoryId: 28,
            appType: AppType.MART,
            name: 'Robot Vacuum Pro',
            description: 'Autonomous smart cleaning robot.',
            price: 4999000,
            stock: 30,
         },
         {
            categoryId: 28,
            appType: AppType.MART,
            name: 'AI Pet Companion',
            description: 'Interactive robotic pet companion.',
            price: 6999000,
            stock: 15,
         },

         // Productivity Tech (Category 29)

         {
            categoryId: 29,
            appType: AppType.MART,
            name: 'Portable Smart Display',
            description: 'Portable touchscreen productivity device.',
            price: 2999000,
            stock: 25,
         },
         {
            categoryId: 29,
            appType: AppType.MART,
            name: 'Digital Note Tablet',
            description: 'Paperless writing and note-taking tablet.',
            price: 3499000,
            stock: 30,
         },

         // Future Gadgets (Category 30)

         {
            categoryId: 30,
            appType: AppType.MART,
            name: 'Pocket Projector',
            description: 'Portable projector for work and entertainment.',
            price: 2799000,
            stock: 35,
         },
         {
            categoryId: 30,
            appType: AppType.MART,
            name: 'Smart Air Purifier',
            description: 'Connected air purifier with AI optimization.',
            price: 2399000,
            stock: 40,
         },

         // Gaming Tech (Category 31)

         {
            categoryId: 31,
            appType: AppType.MART,
            name: 'RGB Gaming Keyboard',
            description: 'Mechanical keyboard with RGB lighting.',
            price: 1499000,
            stock: 60,
         },
         {
            categoryId: 31,
            appType: AppType.MART,
            name: 'Ultra Gaming Mouse',
            description: 'Precision gaming mouse for esports.',
            price: 899000,
            stock: 80,
         },

         // Creator Tech (Category 32)

         {
            categoryId: 32,
            appType: AppType.MART,
            name: '4K Creator Webcam',
            description: 'Ultra HD webcam for content creators.',
            price: 1799000,
            stock: 50,
         },
         {
            categoryId: 32,
            appType: AppType.MART,
            name: 'Studio USB Microphone',
            description: 'Professional USB microphone for streaming.',
            price: 2199000,
            stock: 35,
         },
         {
            categoryId: 32,
            appType: AppType.MART,
            name: 'Creator Lighting Kit',
            description: 'Portable lighting kit for video production.',
            price: 1599000,
            stock: 45,
         },
      ],
   });

   console.log(
      '✅ 25 inventory products seeded',
   );
}