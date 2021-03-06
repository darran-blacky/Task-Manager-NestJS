import { EntityRepository, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-tast-dto';
import { Task } from './task.entity';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = new Task();
    task.title = title;
    task.description = description;
    await this.save(task);

    return task;
  }
}
