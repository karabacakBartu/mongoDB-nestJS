import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import {Movie, MovieSchema} from 'tools/schemas/moviesschema';
import { User,UserSchema } from 'tools/schemas/userschema';
@Module({
  imports: [MongooseModule.forFeature([{name:User.name,schema:UserSchema},{name:Movie.name,schema:MovieSchema}])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
