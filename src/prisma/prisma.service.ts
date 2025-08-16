import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
// import { PrismaClient } from '../../generated/prisma'; // if the schema.prisma outputs to this path

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }

  cleanDb() {
    // this is to be used for testing
    return this.$transaction([
      // we start with bookmarks due to foreign key constraint, the transaction is critical here
      this.bookmark.deleteMany(),
      this.user.deleteMany(),
    ]);
  }
}
