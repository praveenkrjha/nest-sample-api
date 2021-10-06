import { Injectable } from '@nestjs/common';
import e from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = []
  create(createUserDto: CreateUserDto) {
    var existingUser = this.users.find(x=>x.id == createUserDto.id);
    if(existingUser){
      existingUser.name = createUserDto.name;
      existingUser.age = createUserDto.age;
    }
    else{
      this.users.push(createUserDto);
    }
    //console.log(`createUserDto=${JSON.stringify(createUserDto)}`);
    return createUserDto;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    var existingUser = this.users.find(x=>x.id == id);
    return existingUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
