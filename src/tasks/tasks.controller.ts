import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks() {
    return this.tasksService.getTasks();
  }

  @Post()
  createTask() {
    return this.tasksService.createTask();
  }

  @Put()
  updateTask() {
    return this.tasksService.updateTask();
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
