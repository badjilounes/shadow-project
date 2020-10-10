import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../../user/user.entity';
import { AuthService } from '../auth.service';
import { JwtToken } from './jwt-token.interface';
import { jwtConstants } from './jwt.constant';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'auth') {
    constructor(
      private readonly authService: AuthService,
    ) {
      super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: jwtConstants.secret,
      });
    }
  
    async validate(token: JwtToken): Promise<User> {
      return this.authService.validateToken(token.id, token.exp);
    }
  }
