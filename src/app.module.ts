import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import environment from 'tools/environment/environment';

@Module({
  imports: [UserModule,MongooseModule.forRoot(environment.mongoURL)],
  controllers: [AppController, UserController],
  providers: [AppService,UserService],
})
export class AppModule {}
