import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./CreateTask.dto";
import type { Task } from "./task.interface";
import { UpdateTaskDto } from "./UpdateTask.dto";
import { log } from "console";

@Injectable()
export class TaskService {
   tasks: Task[] = [];

   findAll(): Task[] {
      return this.tasks;
   }

   findOne(id: number): Task | undefined {
      return this.tasks.find((task) => task.id == id);
   }

   create(dto: CreateTaskDto) {
      const id = this.tasks.length + 1;
      this.tasks.push({ id, ...dto } as unknown as Task);
      return id;
   }

   update(dto: UpdateTaskDto, id: number) {
      const currentTask = this.findOne(id);

      if (!currentTask) {
         throw new Error("Task not found");
      }

      const index = this.tasks.findIndex((task) => task.id == id);

      this.tasks[index] = { ...currentTask, ...dto } as unknown as Task;
   }

   delete(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
   }
}
