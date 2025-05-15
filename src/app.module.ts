import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ZooModule } from "./zoo/zoo.module";
import { TaskManagerModule } from "./task-manager/task-manager.module";

@Module({
  imports: [ZooModule, TaskManagerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
