import {
   Body,
   Controller,
   Delete,
   Get,
   HttpException,
   HttpStatus,
   Param,
   Patch,
   Post,
} from "@nestjs/common";
import { TaskService } from "./task.service";
import { UpdateTaskDto } from "./UpdateTask.dto";
import { CreateTaskDto } from "./CreateTask.dto";
import { log } from "console";

@Controller("tasks")
export class TasksController {
   constructor(private readonly taskService: TaskService) {}

   @Get()
   getTasks() {
      return this.taskService.findAll();
   }

   @Get(":id")
   getTaskById(@Param("id") id: number) {
      log(id);
      const task = this.taskService.findOne(id);

      log(task);
      if (!task) {
         throw new HttpException("Task not found", HttpStatus.NOT_FOUND);
      }

      return task;
   }

   @Delete(":id")
   deleteTaskById(@Param("id") id: number) {
      return this.taskService.delete(id);
   }

   @Patch(":id")
   updateTaskById(@Body() dto: UpdateTaskDto, @Param("id") id: number) {
      return this.taskService.update(dto, id);
   }

   @Post()
   createNewTask(@Body() dto: CreateTaskDto, @Param("id") id: number) {
      return this.taskService.create(dto);
   }
}
