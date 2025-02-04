import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags, PartialType } from '@nestjs/swagger';
import { DeepPartial } from 'typeorm';
import { User } from '../user/user.entity';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './model/login-request.dto';
import { LoginResponseDto } from './model/login-response.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('login')
    @ApiOperation({ operationId: 'login' })
    @ApiBody({ description: 'User credential to check', type: LoginRequestDto })
    @ApiResponse({ status: 200, description: 'Logged in user jwt token', type: LoginResponseDto })
    async login(@Body() credential: LoginRequestDto): Promise<LoginResponseDto> {
        return this.authService.login(credential.email, credential.password);
    }

    @Post('signup')
    @ApiOperation({ operationId: 'signup' })
    @ApiBody({ description: 'User signup', type: PartialType(User) })
    @ApiResponse({ status: 200, description: 'Signed up user', type: User })
    async signup(@Body() user: DeepPartial<User>): Promise<User> {
        return this.authService.signup(user);
    }

    @Get('me')
    @ApiBearerAuth()
    @UseGuards(AuthGuard('auth'))
    @ApiOperation({ operationId: 'getConnectedUser' })
    @ApiResponse({ status: 200, description: 'Logged in user', type: User })
    async getConnectedUser(@Request() req: any): Promise<User> {
        return req.user;
    }
}
