import { Controller, Get } from '@nestjs/common';
import {UsersRepository} from "../../../packages/users/users.repository";

@Controller('/users')
export class UsersController {
    constructor(
        private _userRepository: UsersRepository
    ) {
    }
    @Get('/')
    all() {
        return this._userRepository.all();
    }
}
