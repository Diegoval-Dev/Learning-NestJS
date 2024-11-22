import { IsString, MinLength } from "class-validator";

export class CreateTaskDto {

  @IsString()
  @MinLength(4)
  title: string;

  @IsString()
  @MinLength(4)
  description: string;
}