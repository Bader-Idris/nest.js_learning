// check the docs to learn more: https://docs.nestjs.com/recipes/passport#implementing-passport-jwt
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') { // we can name this default 'jwt' as a refresh token
  constructor(
    config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_SECRET') as string,
    });
  }

  async validate(payload: { sub: number; email: string }) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: payload.sub,
      },
    });

    // Check if user is null and handle accordingly
    if (!user) {
      throw new Error('User not found'); // or handle the error in a way that suits your application
    }

    // Create a new object without the hash property
    const { hash, ...userWithoutHash } = user;

    return userWithoutHash; // Return the new object
  }
}