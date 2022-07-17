import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type MovieDocument=Movie & Document;

@Schema()
export class Movie{
  @Prop({unique:true,required:true})
  movieName:string;
}


export const MovieSchema = SchemaFactory.createForClass(Movie);