import { Injectable } from "@nestjs/common";
import { ConfigService } from "./config-service.abstract";

@Injectable()
export class DevConfigService extends ConfigService {
   getId(): string {
      return "DEV CONFIG";
   }
}
