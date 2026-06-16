import {
   Injectable,
   NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuditLogsService {
   constructor(
      private readonly prisma: PrismaService,
   ) { }

   async findAll() {
      return {
         data:
            await this.prisma.auditLog.findMany({
               include: {
                  user: true,
               },

               orderBy: {
                  id: 'desc',
               },
            }),
      };
   }

   async findOne(id: number) {
      const log =
         await this.prisma.auditLog.findUnique({
            where: {
               id,
            },

            include: {
               user: true,
            },
         });

      if (!log) {
         throw new NotFoundException(
            'Audit log not found',
         );
      }

      return {
         data: log,
      };
   }

   async findByUser(
      userId: number,
   ) {
      return {
         data:
            await this.prisma.auditLog.findMany({
               where: {
                  userId,
               },

               include: {
                  user: true,
               },

               orderBy: {
                  id: 'desc',
               },
            }),
      };
   }

   async create(data: {
      userId?: number;
      action: string;
      entity: string;
      entityId?: string;
      oldData?: any;
      newData?: any;
      ipAddress?: string;
   }) {
      return this.prisma.auditLog.create({
         data,
      });
   }
}