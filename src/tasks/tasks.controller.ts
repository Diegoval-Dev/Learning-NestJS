import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/crate-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {

  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(
    @Query() query: any
  ) {
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTaskById(
    @Param('id') id: string
  ) {
    return this.tasksService.getTaskById(parseInt(id));
  }

  @Post()
  createTask(
    @Body() task: CreateTaskDto
  ) {
    return this.tasksService.createTask(task);
  }

  @Put()
  updateTask(
    @Body() task: UpdateTaskDto
  ) {
    return this.tasksService.updateTask(task);
  }

  @Patch()
  patchTaskStatus() {
    return this.tasksService.patchTaskStatus();
  }

  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }

}
