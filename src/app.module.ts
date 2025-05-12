import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZooModule } from './zoo/zoo.module';

@Module({
  imports: [ZooModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
