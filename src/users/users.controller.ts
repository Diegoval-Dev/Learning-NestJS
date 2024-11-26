import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ValidateUsersPipe } from './pipes/validate-users/validate-users.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  @HttpCode(201)
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  @Get("ticket/:id")
  getTicket(
    @Param("id", ParseIntPipe) 
    id: number
  ) {
    return id + 10;
  }

  @Get('active/:status')
  isUserActive(
    @Param('status', ParseBoolPipe) 
    status: boolean
  ) {
    console.log(typeof status)
    return status;
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(
    @Query(ValidateUsersPipe) query: {name: string, age: number}
  ){
    console.log(typeof query.age)
    console.log(typeof query.name)
    return `Hello ${query.name}, you are ${query.age + 1} years old`
  }



}
