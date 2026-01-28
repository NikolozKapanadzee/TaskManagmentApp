import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  email: string;
  @Prop({
    type: String,
    required: true,
    select: false,
  })
  password: string;
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Task', default: [] }])
  tasks: mongoose.Types.ObjectId[];
}
export const UserSchema = SchemaFactory.createForClass(User);
