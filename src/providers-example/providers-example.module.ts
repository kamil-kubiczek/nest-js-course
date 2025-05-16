import { Inject, Module } from "@nestjs/common";
import { ConfigService } from "./config-service.abstract";
import { DevConfigService } from "./dev-config.service";
import { ProdConfigService } from "./prod-config.service";
import { ProvidersTestService } from "./providers-test.service";
import { greetingStringFactory } from "./greeting-string.factory";

@Module({
   providers: [
      {
         provide: ConfigService,
         useClass: process.env.NODE_ENV === "development"
            ? DevConfigService
            : ProdConfigService,
      },
      ProvidersTestService,
      {
         provide: "APP_NAME",
         useValue: "NestJS Course",
      },
      {
         provide: "GREETING_STRING_FACTORY",
         useFactory: (appName: string) => {
            return greetingStringFactory(appName);
         },
         inject: ["APP_NAME"],
      },
      {
         useExisting: "GREETING_STRING_FACTORY",
         provide: "COPY_OF_GREETING_STRING_FACTORY",
      },
   ],

   exports: ["GREETING_STRING_FACTORY"],
})
export class ProvidersExampleModule {
   constructor(
      private readonly providersTestService: ProvidersTestService,
      @Inject("GREETING_STRING_FACTORY") private readonly greetingString:
         string,
      @Inject(
         "COPY_OF_GREETING_STRING_FACTORY",
      ) private readonly copyOfGreetingString: string,
   ) {
      this.providersTestService.log();

      console.log("From providers module: ", this.greetingString);
      console.log("From providers module - copy: ", this.copyOfGreetingString);
   }
}
