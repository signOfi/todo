import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../entity/task';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

  task: Task = {};
  tasks: Task[] = [];

  /* Intialize the first task as empty and complete to false state */
  constructor() {
    this.resetTask()
  }

  addTask() {
    this.tasks.push({...this.task});
    this.resetTask
  }

  toggleCompleteStatus(currentTask: Task) {
    currentTask.complete = !currentTask.complete;
  }

  resetTask() {
    this.task = {
      name:"",
      complete: false
    }
  }


}
