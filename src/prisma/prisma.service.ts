import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://nadir:katasandi@localhost:5432/nestapi?schema=public',
        },
      },
    });
  }
}
