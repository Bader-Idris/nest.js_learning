/* minimal code to create a controller
import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}

*/

import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  // to instantiate the controller do:
  constructor(private authService: AuthService) {}
  /* instead of doing
    authService: AuthService above the constructor
    and this.authService = authService inside the constructor
    we do the private syntax above
   */
}

/* we can do that using the nest/cli
nest g controller auth

*/
