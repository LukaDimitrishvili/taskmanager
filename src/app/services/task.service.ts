import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }
  getTasks() {
    return this.http.get("http://localhost:3000/tasks")
  }
  addTask(content: string) {
    return this.http.post("http://localhost:3000/tasks", { content: content, done: false })

  }
}


