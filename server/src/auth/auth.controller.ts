import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRegisterDto } from './dto/userRegister.dto';
import { UserLoginDto } from './dto/userLogin.dto';
import { UserId } from 'src/decorator/userId.decorator';
import { IsAuthGuard } from 'src/guard/isAuth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() userRegisterDto: UserRegisterDto) {
    return this.authService.register(userRegisterDto);
  }
  @Post('login')
  login(@Body() userLoginDto: UserLoginDto) {
    return this.authService.login(userLoginDto);
  }

  @Get('me')
  @UseGuards(IsAuthGuard)
  me(@UserId() userId: string) {
    return this.authService.me(userId);
  }
}
