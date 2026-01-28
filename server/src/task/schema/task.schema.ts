import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { UrgencyLevel } from 'src/enum/urgency.enum';

@Schema({ timestamps: true })
export class Task {
  @Prop({ required: true, type: String })
  title: string;
  @Prop({ type: String, required: false })
  description?: string;
  @Prop({ type: Boolean, required: true, default: false })
  completed: boolean;
  @Prop({ required: true, enum: UrgencyLevel, type: String })
  urgency: UrgencyLevel;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: mongoose.Types.ObjectId;
}
export const TaskSchema = SchemaFactory.createForClass(Task);
