import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [UserModule,MongooseModule.forRoot("mongodb+srv://bartu:156612ab@cluster0.itgsdyh.mongodb.net/?retryWrites=true&w=majority")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
