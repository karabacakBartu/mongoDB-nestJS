import { Injectable } from '@nestjs/common';
import { UsersCreateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import environment from 'tools/environment/environment';



@Injectable()
export class UserService {
  constructor(@InjectModel("User") private UserMongo: Model<UserModel>) { }

  async create(user: UsersCreateDto): Promise<UserModel> {
    const createdUser = new this.UserMongo(user);
    
    return await createdUser.save();
  }


  async getAll(): Promise<UserModel[]> {

    return await this.UserMongo.find().exec();
  }


}