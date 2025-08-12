import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';

/* we have generated this file using the command:
  nest g module prisma
  TODO: another useful one is for the service
  nest g service prisma
  ? if we don't want to create the spec file, we can use the --no-spec flag as in
  nest g service prisma --no-spec
*/

@Global()
@Module({
  imports: [ConfigModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}