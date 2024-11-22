import { Injectable, NotFoundException } from '@nestjs/common';

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

  createTask(task: any) {
    console.log(task);

    this.tasks.push({
      id: this.tasks.length + 1,
      ...task
    });
    return task;
  }

  updateTask() {
    return 'Task updated';
  }

  patchTaskStatus(){
    return 'Task status updated';
  }

  deleteTask() {
    return 'Task deleted';
  } 

}
