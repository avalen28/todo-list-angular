import { Component } from '@angular/core';

interface Task {
  name: string;
  isFinished: boolean;
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent {
  taskList: Task[];
  newTask: string;

  constructor() {
    this.taskList = [];
    this.newTask = "";
  }

  addToList(): void {
    this.taskList.push({
      name: this.newTask,
      isFinished: false
    });
    this.newTask = "";
  }

  changeTaskStatus(nameOfTaskToUpdate: string): void {
    const updatedTaskList = this.taskList.map(task => {
      if (task.name !== nameOfTaskToUpdate) {
        return task
      }
      task.isFinished = !task.isFinished;
      return task
    });
    this.taskList = updatedTaskList;
  }
}
