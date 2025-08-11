/* minimal code to create a service after creating the controller

import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {} // or its name
*/

import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
  test() {} // we can call this function in its controller inside the constructor as:
  // this.authService.test()
  login () {}
  signup () {}
}
