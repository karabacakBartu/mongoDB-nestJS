import { Body, Controller, Get, Post ,Param} from '@nestjs/common';
import { MovieDto } from 'tools/dtos/moviedto.dto';
import { UsersCreateDto } from 'tools/dtos/user.dto';
import { Movie } from 'tools/schemas/moviesschema';
import { User } from 'tools/schemas/userschema';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private userService: UserService) { }

    @Post('users/createuser')
    async createUser(@Body() body: UsersCreateDto):Promise<User> {
        return this.userService.create(body);
    }

    @Get('users')
        async getAllUsers():Promise<User[]> {
            return this.userService.getAll();
    }

    @Get('users/:userName')
    findOne(@Param() params): Promise<User[]>
    {
      return this.userService.getMovieMatch(params.userName);
    }


    @Post('movies/createmovie')
    createMovie(@Body() body:MovieDto):Promise<Movie>
    {
        
            return this.userService.createMovie(body);
        
    }

    @Get('movies')
    getAllMovies()
    {
      return this.userService.getMovies();
    }
    
}
