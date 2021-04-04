import { CreateTaskDto } from './dto/create-tast-dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
  ): Task {
    return this.tasksService.createTask(title, description);
  }
}
