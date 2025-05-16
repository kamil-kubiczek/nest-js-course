import { Injectable } from "@nestjs/common";
import { ConfigService } from "./config-service.abstract";

@Injectable()
export class ProdConfigService extends ConfigService {
   getId(): string {
      return "PROD CONFIG";
   }
}
