import { Injectable } from "@nestjs/common";

@Injectable()
export class PenguinsHelloWorldService {
   getHello(): string {
      return "Hello World from Penguins in Zoo module!";
   }
}
