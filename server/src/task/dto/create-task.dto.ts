import {
  ArrayUnique,
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { UrgencyLevel } from 'src/enum/urgency.enum';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsString()
  description?: string;
  @IsNotEmpty()
  @IsEnum(UrgencyLevel)
  urgency: UrgencyLevel;
}
