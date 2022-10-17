import {Global, Module} from '@nestjs/common';
import {PrismaService} from "./database/prisma.service";
import {ConfigModule} from "@nestjs/config";

@Global()
@Module({
    imports: [
        ConfigModule.forRoot()
    ],
    controllers: [],
    providers: [PrismaService],
    get exports() {
        return this.providers;
    }
})
export class ServicesModule {}
