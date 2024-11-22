import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/crate-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {

  private tasks = []

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: number) {
    const taskFound = this.tasks.find(task => task.id === id);

    if(!taskFound) {
      return new NotFoundException(`Task with id ${id} not found`);
    }

    return taskFound;
  }

  createTask(task: CreateTaskDto) {
    console.log(task);

    this.tasks.push({
      id: this.tasks.length + 1,
      ...task
    });
    return task;
  }

  updateTask(task: UpdateTaskDto) {
    console.log(task);
    return 'Task updated';
  }

  patchTaskStatus(){
    return 'Task status updated';
  }

  deleteTask() {
    return 'Task deleted';
  } 

}
