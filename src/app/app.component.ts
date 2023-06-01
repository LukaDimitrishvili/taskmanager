import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task = '';
  taskList: string[] = []


  addTask() {
    this.taskList.push(this.task)
    this.task = ""
  }
  removeTask(index: number) {
    this.taskList.splice(index, 1)
  }
  clearAll() {
    this.taskList = []
  }
}
