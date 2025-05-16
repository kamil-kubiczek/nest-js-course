import { Inject, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ZooModule } from "./zoo/zoo.module";
import { TaskManagerModule } from "./task-manager/task-manager.module";
import { ProvidersExampleModule } from "./providers-example/providers-example.module";

@Module({
  imports: [ZooModule, TaskManagerModule, ProvidersExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
    @Inject("GREETING_STRING_FACTORY") private readonly greetingString: string,
  ) {
    console.log("From app module: ", this.greetingString);
  }
}
