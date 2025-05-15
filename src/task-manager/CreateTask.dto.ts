import { IsString, MaxLength } from "class-validator";

export class CreateTaskDto {
   @IsString()
   @MaxLength(3)
   title: string;

   @IsString()
   description: string;
}
