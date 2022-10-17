import {Injectable} from "@nestjs/common";
import {PrismaService} from "../../services/database/prisma.service";

@Injectable()
export class UsersRepository {
    constructor(
        private _prisma: PrismaService
    ) {
    }

    all() {

    }
}