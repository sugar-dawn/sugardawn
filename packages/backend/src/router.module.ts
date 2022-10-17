import { Module } from '@nestjs/common';
import {ServicesModule} from "./services/services.module";
import {PackagesModule} from "./packages/packages.module";
import {ApiModule} from "./api/api.module";

@Module({
    imports: [PackagesModule, ApiModule, ServicesModule],
})
export class RouterModule {}
