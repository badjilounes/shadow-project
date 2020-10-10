import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { LoginResponseDto } from './model/login-response.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) { }

    encodeUserToken(user: User): LoginResponseDto {
        return {
            accessToken: this.jwtService.sign({
                id: user.id,
            }),
        };
    }

    async login(email: string, password: string): Promise<LoginResponseDto> {
        const user: User = await this.userService.findOne({ where: { email } });
        const passwordMatch = await user?.checkUserPassword(password);

        if (!user || !passwordMatch) {
            throw new UnauthorizedException('login.error');
        }

        return this.encodeUserToken(user);
    }

    async validateEmail(email: string | undefined): Promise<User> {
        const user = await this.userService.findOne({ where: { email } });

        if (!user) {
            throw new UnauthorizedException('auth.userDoesNotExist');
        }

        return user;
    }

    async validateToken(id: number, expireAt: number): Promise<User> {
        const isExpired = expireAt < (Date.now() / 1000);

        if (isExpired) {
            throw new UnauthorizedException('auth.tokenExpired');
        }

        return this.validateUserToken(id);
    }

    async validateUserToken(id: number): Promise<User> {
        const user: User = await this.userService.findOne({ where: { id } })

        if (!user) {
            throw new UnauthorizedException('auth.userDoesNotExist');
        }

        return user;
    }
}
