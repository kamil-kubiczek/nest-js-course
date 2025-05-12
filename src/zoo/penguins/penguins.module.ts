import { Module } from "@nestjs/common";
import { PenguinsManagementController } from "./penguins-management/penguins-management.controller";
import { PenguinsManagementService as PenguinsManagementService } from "./penguins-management-service/penguins-management.service";
import { PenguinsHelloWorldService } from "./penguins-hello-world/penguins-hello-world.service";

@Module({
   controllers: [PenguinsManagementController],
   providers: [PenguinsManagementService, PenguinsHelloWorldService],
   exports: [PenguinsHelloWorldService],
})
export class PenguinsModule {}
