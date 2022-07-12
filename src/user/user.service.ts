import { Injectable } from '@nestjs/common';
import { userInfo } from 'os';
import { UsersCreateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';

const result: UserModel[] = [];

@Injectable()
export class UserService {
  getAllUsers(): UserModel[] {
    if (result.length === 0) {
      this.creatingMockUser(
        {
          userName: "Bartu",
          gender: "E",
          age: 26,
          password: "123123",
          rePassword: "123123",
          favoriteFilms: "StarWars"
        }
      );
    }
    return result;
  }


  createUser(body: UsersCreateDto) {
    var found = result.find(res => res.userName === body.userName);
    console.log("found === ",found);
    if (found) {
      return found;
    } else {
      this.creatingMockUser(body);
      return result.slice(result.length - 1, result.length);
    }
  }


  private creatingMockUser(data: any) {
    const user: UserModel = new UserModel();
    user.userName = data.userName;
    user.gender = data.gender;
    user.age = data.age;
    user.password = data.password;
    user.rePassword = data.rePassword;
    user.favoriteFilms = data.favoriteFilms;
    result.push(user);
  }
}
