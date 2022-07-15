import { Injectable } from '@nestjs/common';
import { UsersCreateDto } from 'tools/dtos/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { User, UserDocument } from 'tools/schemas/userschema';



const mahmut = [];


@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserMongo: Model<UserDocument>) { }

  async create(user: UsersCreateDto): Promise<User> {
    user.userName = user.userName.toLowerCase();
    const createdUser = new this.UserMongo(user);

    return await createdUser.save();
  }


  async getAll(): Promise<User[]> {

    return await this.UserMongo.find().exec();
  }




  async getMovieMatch(userName): Promise<User[]> {

    let favoritemovies: [];

    let arr = this.UserMongo.find({

      userName: userName,

    }).exec();

    (await arr).forEach(function (data) {
      favoritemovies = data.favoriteMovies;
    });







    return await this.UserMongo.find({

      favoriteMovies: { $in: favoritemovies },
      userName: { $ne: userName }

    });



  }
}