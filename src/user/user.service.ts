import { Injectable } from '@nestjs/common';
import { UsersCreateDto } from 'tools/dtos/user.dto';
import { MovieDto } from 'tools/dtos/moviedto.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { User, UserDocument } from 'tools/schemas/userschema';
import { Movie, MovieDocument } from 'tools/schemas/moviesschema';



const mahmut = [];


@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserMongo: Model<UserDocument>, @InjectModel(Movie.name) private FavoriteMoviesMongo: Model<MovieDocument>) { }

  //user create func
  async create(user: UsersCreateDto): Promise<User> {
    user.userName = user.userName.toLowerCase();
    const createdUser = new this.UserMongo(user);

    return await createdUser.save();
  }

  //get all users info
  async getAll(): Promise<User[]> {

    /*return await this.UserMongo.find();*/
   return await this.UserMongo.aggregate([{
      $lookup: {
        from: 'movies',
        localField: 'favoriteMovies',
        foreignField: '_id',
        as: 'Userfav'
      }
    }]);
  }

  //get all movie name and id
  async getMovies(): Promise<Movie[]> {

    return await this.FavoriteMoviesMongo.find().exec();
  }

  //Movie Create func
  async createMovie(movie: MovieDto): Promise<Movie> {
    movie.movieName = movie.movieName.toLowerCase();
    const createdMovie = new this.FavoriteMoviesMongo(movie);

    return await createdMovie.save();
  }



  //This func find matching other users favorite movies with your favorite movies. 
  async getMovieMatch(userName): Promise<User[]> {
    let movieId: {};
    let favoritemovies: [];
    /* console.log((await this.getMovies()).at(1));*/
    /* (await this.getMovies()).forEach(function (data) {
        movieId: data.movieName,
     });*/


    let arr = await this.UserMongo.find({

      userName: userName,

    }).exec();


    arr.forEach(function (data) {
      favoritemovies = data.favoriteMovies;
    });


      
    return await this.UserMongo.find({

      favoriteMovies: { $in: favoritemovies },
      userName: { $ne: userName }

    });

  }
  
}