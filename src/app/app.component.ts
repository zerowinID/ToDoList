import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {HeaderComponent} from './header/header.component';
import {TaskInputComponent} from './task-input/task-input.component';
import {TaskCounterComponent} from './task-counter/task-counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, HeaderComponent, TaskInputComponent, TaskCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoListApp-frontend';
}
