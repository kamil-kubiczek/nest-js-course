import { Injectable } from "@nestjs/common";

@Injectable()
export class PenguinsManagementService {
   listPenguins() {
      return ["Skipper", "Kowalski", "Rico", "Private"];
   }
}
