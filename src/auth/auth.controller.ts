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

import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') // adding the auth makes it a global prefix route of /auth
export class AuthController {
  // to instantiate the controller do:
  constructor(private authService: AuthService) {
    // this.authService.test() // this is how to invoke the function of the service,
    // ? this is called dependency injection in a nutshell!
  }
  /* instead of doing
    authService: AuthService above the constructor
    and this.authService = authService inside the constructor
    we do the private syntax above
   */

  @Post('signup') // this is how to make it as a route with http methods
  signup() {
    return "I'm signup"; // returned as plain text
    // so doing a post in postman to: http://localhost:3000/auth/signin
    // will return our msg!
    // in the header of X-Powered-By will be Express
  }

  @Post('signin')
  login() {
    return {
      msg: "I'm login", // returned as json data
    };
  }
}

/* we can do that using the nest/cli
nest g controller auth

*/
