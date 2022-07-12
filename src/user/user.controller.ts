import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersCreateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    createUser(@Body() body: UsersCreateDto) {
        return this.userService.createUser(body);
    }

    @Get()
    getAllUsers(): UserModel[] {
        return this.userService.getAllUsers();
    }
}
