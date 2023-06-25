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
  
  constructor() {
    this.taskList = [
      {
        name: 'wash dishes',
        isFinished: true
      },
      {
        name: 'grocery shopping',
        isFinished: false
      }]
  }
}
