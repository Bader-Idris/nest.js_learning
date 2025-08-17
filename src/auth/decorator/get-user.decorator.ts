import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@prisma/client';

// check the docs to learn more about these decorators: https://docs.nestjs.com/custom-decorators#custom-route-decorators
export const GetUser = createParamDecorator(
  (data: keyof User | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    const user = request.user;
    // switchToHttp could be replaced with websockets for e.g.

    if (data) {
      return user ? user[data] : null;
    }
    return user;
  },
);
