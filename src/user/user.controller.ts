import { Body, Controller, Get, Post ,Param} from '@nestjs/common';
import { UsersCreateDto } from 'tools/dtos/user.dto';
import { User } from 'tools/schemas/userschema';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private userService: UserService) { }

    @Post('users')
    async createUser(@Body() body: UsersCreateDto):Promise<User> {
        return this.userService.create(body);
    }

    @Get('users')
        async getAllUsers():Promise<User[]> {
            return this.userService.getAll();
    }

    @Get('user/:userName')
    findOne(@Param() params): Promise<User[]>
    {
      return this.userService.getMovieMatch(params.userName);
    }
    
}
