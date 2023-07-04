import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  task = '';
  taskList: any[] = [];

  constructor(
    private taskservice: TaskService
  ) { }

  ngOnInit(): void {
    this.taskservice.getTasks().subscribe((tasks: any) => {
      console.log(tasks);
      this.taskList = tasks
    })
  }

  addTask() {
    this.taskList.push({
      content: this.task,
      done: false
    })

    this.taskservice.addTask(this.task).subscribe((data) => {
      console.log(data)
    })
    this.task = ""
  }
  removeTask(index: number) {
    this.taskList.splice(index, 1)
  }
  clearAll() {
    this.taskList = []
  }

}
