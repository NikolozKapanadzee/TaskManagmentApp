import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { isValidObjectId, Model } from 'mongoose';
import { Task } from 'src/task/schema/task.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Task.name) private taskModel: Model<Task>,
  ) {}
  findAll() {
    return this.userModel.find();
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    return {
      message: 'User Have Found',
      data: user,
    };
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true, runValidators: true },
    );
    if (!updatedUser) {
      throw new NotFoundException('User Not Found');
    }
    return {
      message: 'User Updated Successfully',
      data: updatedUser,
    };
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    await this.taskModel.deleteMany({ author: id });
    if (!deletedUser) {
      throw new NotFoundException('User Not Found');
    }
    return {
      message: 'User Deleted Successfully',
      data: deletedUser,
    };
  }
}
