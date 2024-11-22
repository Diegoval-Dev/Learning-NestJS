import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  phone: string;
}

@Injectable()
export class UsersService {

  private users = [
    {
      id: 1,
      name: 'User 1',
      phone: '123456789',
    },
    {
      id: 2,
      name: 'User 2',
      phone: '987654321',
    },
    {
      id: 3,
      name: 'User 3',
      phone: '123123123',
    },
  ]



  getUsers(): User[] {
    return this.users;
  }
}
