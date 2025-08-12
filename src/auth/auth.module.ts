// we have to create the class in each new module:

// initially we import the module from nestJs common
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AuthController],// added after creating the controller!
  providers: [AuthService],// this is after the service is created
})
// and then we create the class
// and we have to export it
export class AuthModule {}

/* these are the minimal required code to create a module
import { Module } from '@nestjs/common';
@Module({})
export class AuthModule {} // or its name
  if not exported, it'll be private to this module

  then we have to import it in the root module [src/app.module.ts]:
  as ==>
  imports: [AuthModule]
*/

/*
  [ TODO: you already have installed the nest/cli globally!]
  To create a new module using the nest/cli do:
  nest g module <nameOfTheModule>
  # it'll automatically create the module imports and exports
*/

/* TODO: how the nestJs flow works with MCS (module, service, controller):
  the controller receives the request
  the controller calls the service
  the service calls the repository or does its internal logic
  then it sends the response to the controller
  then the controller sends the response to the client
*/
