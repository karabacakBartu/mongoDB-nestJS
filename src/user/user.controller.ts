import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersCreateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    async createUser(@Body() body: UsersCreateDto):Promise<UserModel> {
        return this.userService.create(body);
    }

    @Get()
    async getAllUsers():Promise<UserModel[]> {
        return this.userService.getAll();
    }
}
