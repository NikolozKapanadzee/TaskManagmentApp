import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schema/task.schema';
import { isValidObjectId, Model } from 'mongoose';
import { User } from 'src/user/schema/user.schema';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name) private taskModel: Model<Task>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    const newTask = await this.taskModel.create(createTaskDto);
    return {
      message: 'Task Created Successfully',
      data: newTask,
    };
  }

  findAll() {
    return this.taskModel.find();
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    const task = await this.taskModel.findById(id);
    if (!task) {
      throw new NotFoundException('Task Has Not Been Found');
    }
    return {
      message: 'Task Has Been Found',
      data: task,
    };
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    const updatedTask = await this.taskModel.findByIdAndUpdate(
      id,
      updateTaskDto,
      { new: true, runValidators: true },
    );
    if (!updatedTask) {
      throw new NotFoundException('Task Has Not Been Found');
    }
    return {
      message: 'Task Has Been Updated',
      data: updatedTask,
    };
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    const deletedTask = await this.taskModel.findByIdAndDelete(id);
    if (!deletedTask) {
      throw new NotFoundException('Task Has Not Been Found');
    }
    return {
      message: 'Task Has Been Deleted',
      data: deletedTask,
    };
  }
}
