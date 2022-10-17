import { Module } from '@nestjs/common';
import {UsersModule} from "./users/users.module";

@Module({
    imports: [UsersModule],
    get exports () {
        return this.imports;
    }
})
export class PackagesModule {}
