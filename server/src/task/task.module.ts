import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './schema/task.schema';
import { User, UserSchema } from 'src/user/schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { schema: TaskSchema, name: Task.name },
      { schema: UserSchema, name: User.name },
    ]),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
