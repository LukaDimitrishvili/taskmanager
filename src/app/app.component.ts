import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task = '';
  taskList: any[] = []



  addTask() {
    this.taskList.push({
      content: this.task,
      done: false
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
