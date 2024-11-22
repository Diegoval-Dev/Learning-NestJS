import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  age: number;
}

@Injectable()
export class UsersService {

  private users = [
    {
      id: 1,
      email: 'aa@aaa.com',
      password: '123456',
      name: 'John Doe',
      age: 30
    },
    {
      id: 2,
      email: 'bbb@bb.com',
      password: 'asdfafds',
      name: 'Javier',
      age: 32
    },
  ]



  getUsers(): User[] {
    return this.users;
  }

  createUser(user: CreateUserDto): User {
    this.users.push({
      id: this.users.length,
      ...user
    });
    return { id: this.users.length, ...user };
  }
}
