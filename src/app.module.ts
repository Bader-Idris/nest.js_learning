import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// manually import the module
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // same as using @Global()
    AuthModule,
    UserModule,
    BookmarkModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService], // providers are the services
})
export class AppModule {}
