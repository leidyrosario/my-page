import { Component } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-blogposts',
  templateUrl: './blog.component.html',
  styles: ['']
})


export class BlogComponent {

  public posts: Post[] = [
    {
      path: 'cominciamo-con-angular',
      title: 'Cominciamo con Angular',
      thumb: 'angular-logo-thumb.png'
    },
    {
      path: 'todo-app-con-angular',
      title: 'ToDo app con Angular',
      thumb: 'todo-thumb.png'
    },
    {
      path: 'introduzione-vscode',
      title: 'Introduzione a VSCode',
      thumb: 'vscode-thumb.png'
    }
    ];

}

