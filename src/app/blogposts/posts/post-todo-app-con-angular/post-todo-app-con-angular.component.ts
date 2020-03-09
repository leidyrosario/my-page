import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-todo-app-con-angular',
  templateUrl: './post-todo-app-con-angular.component.html',
  styleUrls: ['./post-todo-app-con-angular.component.css']
})
export class PostTodoAppConAngularComponent implements OnInit {
  miaVar = `
  npm install -g @angular/cli
  `;

  constructor() { }

  ngOnInit() {
  }

}
