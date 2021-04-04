import { CreateTaskDto } from './dto/create-tast-dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
    return Object.keys(filterDto).length
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
  ): Task {
    return this.tasksService.createTask(title, description);
  }
}
