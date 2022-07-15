import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersCreateDto } from 'tools/dtos/user.dto';
import { User } from 'tools/schemas/userschema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    async createUser(@Body() body: UsersCreateDto):Promise<User> {
        return this.userService.create(body);
    }

    @Get()
        async getAllUsers():Promise<User[]> {
            return this.userService.getAll();
    }
    
}
