/* minimal code to create a service after creating the controller

import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {} // or its name
*/

import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';
// import { User, Bookmark } from "@prisma/client";

@Injectable({})
export class AuthService {
  test() {} // we can call this function in its controller inside the constructor as:
  // this.authService.test()

  constructor(private prisma: PrismaService) {}
  signup() {
    return {
      msg: 'I have signed up',
    };
  }
  login() {
    return {
      msg: 'I have logged in',
    };
  }
}
