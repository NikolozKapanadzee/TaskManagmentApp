import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { Task, TaskSchema } from 'src/task/schema/task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { schema: UserSchema, name: User.name },
      { schema: TaskSchema, name: Task.name },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
