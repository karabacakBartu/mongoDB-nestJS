import { Movies } from "tools/models/movies.model";

export class UsersCreateDto{
    userName:string;
    gender:string;
    password:string;
    repassword:string;
    age:number;
    favoriteFilms:Movies[];
}

export class UserLogin{
    userName:string;
    password:string;

}
