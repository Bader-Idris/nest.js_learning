import { AuthGuard } from '@nestjs/passport';

export class JwtGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
// to be used as jwtGuard instead of calling AuthGuard('jwt'), check the user.controller file
