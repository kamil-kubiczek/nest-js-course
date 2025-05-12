import { Controller, Get, Param, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { log } from "console";
import { PenguinsHelloWorldService } from "./zoo/penguins/penguins-hello-world/penguins-hello-world.service";

@Controller("hello")
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly PenguinsHelloWorldService: PenguinsHelloWorldService,
  ) {}

  @Get("world")
  getHelloWorld(): string {
    return this.appService.getHello();
  }

  @Post("world/:id")
  addHelloWorld(@Param("id") id: string): string {
    log(id);
    return "This action adds a new hello world";
  }

  @Get("hello/animals")
  getAnimals(): string {
    return this.PenguinsHelloWorldService.getHello();
  }
}
