import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-tast-dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';
@Injectable()
export class TasksService {
  private tasks: Task[] = [
    { id: 'one', description: '1111', title: 'ONE', status: TaskStatus.OPEN },
    { id: 'two', description: '2222', title: 'TWO', status: TaskStatus.DONE },
    {
      id: 'three',
      description: '3333',
      title: 'THREE',
      status: TaskStatus.DONE,
    },
    {
      id: 'four',
      description: '4444',
      title: 'FOUR',
      status: TaskStatus.IN_PROGRESS,
    },
    { id: 'five', description: '5555', title: 'FIVE', status: TaskStatus.OPEN },
    { id: 'SIX', description: '6666', title: 'SIX', status: TaskStatus.DONE },
    {
      id: 'SEVEN',
      description: '7777',
      title: 'SEVEN',
      status: TaskStatus.IN_PROGRESS,
    },
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;

    let tasks = this.getAllTasks();

    if (status) tasks = tasks.filter((task) => task.status === status);

    if (search)
      tasks = tasks.filter(
        ({ title, description }) =>
          description.includes(search) || title.includes(search),
      );

    return tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.DONE,
    };

    this.tasks.push(task);

    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
