import { IsBoolean, IsString, MaxLength } from "class-validator";

export class UpdateTaskDto {
   @IsString()
   @MaxLength(3)
   title: string;

   @IsString()
   description: string;

   @IsBoolean()
   done: boolean;
}
