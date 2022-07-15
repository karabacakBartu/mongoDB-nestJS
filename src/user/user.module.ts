import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'tools/models/user.model';
@Module({
  imports: [UserModule,MongooseModule.forFeature([{name:"user",schema:UserSchema}])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
