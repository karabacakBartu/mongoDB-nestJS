import { Movies } from "./movies.model";


export class UserModel{
    id:string;
    userName:string;
    gender:string;
    password:string;
    rePassword:string;
    age:number;
    favoriteFilms:Movies[];

}