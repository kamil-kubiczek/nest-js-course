import { Module } from "@nestjs/common";
import { PenguinsModule } from "./penguins/penguins.module";
import { PenguinsHelloWorldService } from "./penguins/penguins-hello-world/penguins-hello-world.service";

@Module({
  imports: [PenguinsModule],
  providers: [PenguinsHelloWorldService],
  exports: [PenguinsHelloWorldService],
})
export class ZooModule {}
