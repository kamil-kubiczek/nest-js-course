import { Injectable } from "@nestjs/common";
import { ConfigService } from "./config-service.abstract";

@Injectable()
export class ProvidersTestService {
   constructor(private readonly configService: ConfigService) {}

   log() {
      console.log(this.configService.getId());
   }
}
