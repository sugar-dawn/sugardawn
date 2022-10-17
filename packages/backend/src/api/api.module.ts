import { Module } from '@nestjs/common';
import {ControllersModule} from "./controllers/controllers.module";

@Module({
  imports: [ControllersModule],
  get exports () {
    return this.imports;
  }
})
export class ApiModule {}
