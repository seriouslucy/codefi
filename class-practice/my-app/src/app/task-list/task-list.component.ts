import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks = signal<string[]>(
  [
    'make bed',
    'brush teeth',
    'wash face'
  ]
  )
}
