import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument=User & Document;

@Schema()
export class User{
  @Prop({unique:true,required:true})
  userName:string;
  @Prop()
  gender:string;
  @Prop()
  password:string;
  @Prop()
  rePassword:string;
  @Prop()
  age:string;
  @Prop()
  favoriteMovies:[];
  
}


export const UserSchema = SchemaFactory.createForClass(User);