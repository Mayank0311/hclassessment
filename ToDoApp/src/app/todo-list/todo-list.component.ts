import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  newTodo: string;
  todos: any;
  todoObj: any;

  constructor(private router: Router) {
    // Checks if SessionID is null
    if (sessionStorage.getItem('sessionID') == null) {
      this.router.navigate(['login']);
    }

    this.newTodo = '';
    this.todos = [];
  }

  ngOnInit() {
  }

  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    };
    this.todos.push(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  deleteSelectedTodos() {
    for (let i = (this.todos.length - 1); i > -1; i--) {
      if (this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }

  logout() {
    sessionStorage.removeItem('sessionID');
    this.router.navigate(['login']);
  }
}
