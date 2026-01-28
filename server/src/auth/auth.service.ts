import { UserLoginDto } from './dto/userLogin.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/schema/user.schema';
import { UserRegisterDto } from './dto/userRegister.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}
  async register(userRegisterDto: UserRegisterDto) {
    const { email, password } = userRegisterDto;
    const existUser = await this.userModel.findOne({ email });
    if (existUser) {
      throw new BadRequestException('User Already Exists');
    }
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = await this.userModel.create({
      email,
      password: hashedPass,
    });
    const userWithoutPassword = await this.userModel
      .findById(newUser._id)
      .select('-password');
    return {
      message: 'User Registered Successfully',
      data: userWithoutPassword,
    };
  }
  async login(userLoginDto: UserLoginDto) {
    const { email, password } = userLoginDto;
    const existUser = await this.userModel
      .findOne({ email })
      .select('password');
    if (!existUser) {
      throw new BadRequestException('User Does Not Exist');
    }
    const isPassEqual = await bcrypt.compare(password, existUser.password);
    if (!isPassEqual) {
      throw new BadRequestException('Invalid Credentials');
    }
    const payload = { id: existUser._id };
    const token = this.jwtService.sign(payload, { expiresIn: '1h' });
    return {
      message: 'User Logined Successfully',
      token: token,
    };
  }
  async me(userId: string) {
    const user = await this.userModel.findById(userId);
    return {
      user,
    };
  }
}
