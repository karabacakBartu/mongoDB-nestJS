import { Movies } from "./movies.model";
import * as mongoose from "mongoose";

export class UserModel{
    userName:string;
    gender:string;
    password:string;
    rePassword:string;
    age:number;
    favoriteFilms:string;

}

export const UserSchema = new mongoose.Schema({
    UserName: String,
    gender:String,
    password:String,
    rePassword:String,
    age: Number,
    favoriteFilms:String
  });