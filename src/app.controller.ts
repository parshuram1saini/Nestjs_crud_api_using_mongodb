import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { publicDecrypt } from 'crypto';
import { AppService } from './app.service';
import { User } from './userd.model';
import { UserUpdateDto } from './userUpdate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('/adduser')
  async createUser(@Body() userDto: User) {
    return this.appService.createUser(userDto);
  }
  @Get('/getuser')
  async getUser() {
    return this.appService.getUser();
  }

  @Put('/updateuser/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateData: UserUpdateDto,
  ): Promise<User> {
    return this.appService.updateUser(id, updateData);
  }

  @Delete('/deleteuser/:id')
  async deleteUser(@Param('id') id: string) {
    return this.appService.deleteUser(id);
  }
}
