import { Controller, Get } from "@nestjs/common";
import { PenguinsManagementService } from "../penguins-management-service/penguins-management.service";

@Controller("penguins-management")
export class PenguinsManagementController {
   constructor(
      private readonly penguinsManagementService: PenguinsManagementService,
   ) {}
   @Get("list")
   listPenguins() {
      return this.penguinsManagementService.listPenguins();
   }
}
