/* minimal code to create a service after creating the controller

import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {} // or its name
*/

import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';
// import { User, Bookmark } from "@prisma/client";
import { AuthDto } from './dto';
// we'll use argon instead of bcrypt, because the latter one can only do up to 72 bytes
import * as argon from 'argon2';

@Injectable({})
export class AuthService {
  test() {} // we can call this function in its controller inside the constructor as:
  // this.authService.test()

  constructor(private prisma: PrismaService) {}
  async signup(dto: AuthDto) {
    // generate the password hash
    const hash = await argon.hash(dto.password);
    // save the new user in the db
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
      // This select is to isolate returned properties
      select: {
        id: true,
        email: true,
        createdAt: true,
      }
    });

    // or we can remove unwanted fields from user object:
    // delete user.hash;// this didn't work with me!

    // ! If you get a prisma error of type P2021, then you have to do the bunx prisma migrate dev

    // return the saved user
    return user;
  }
  login() {
    return {
      msg: 'I have logged in',
    };
  }
}
