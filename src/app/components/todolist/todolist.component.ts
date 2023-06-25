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

  addToList(): void{
    this.taskList.push({
      name: this.newTask,
      isFinished: false
    });
    this.newTask = "";
  }
}
