import { Injectable } from '@nestjs/common';
import e from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = []
  create(createUserDto: CreateUserDto) {
    const existingUser = this.users.find((x) => x.id == createUserDto.id);
    try {
      if (existingUser) {
        existingUser.name = createUserDto.name;
        existingUser.age = createUserDto.age;
      } else {
        this.users.push(createUserDto);
      }
    } catch {}
    //console.log(`createUserDto=${JSON.stringify(createUserDto)}`);
    return createUserDto;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const existingUser = this.users.find((x) => x.id == id);
    return existingUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const count = 0;
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  dummyMethod(a: string, b: string) {
    console.log('a is used, b is unused : ' + a);
  }
}
