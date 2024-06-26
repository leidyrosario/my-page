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
      thumb: 'angular-logo-thumb.png',
      text: 'Breve introduzione al framework Angular e a quello che lo rende così accattivante'
    },
    {
      path: 'todo-app-con-angular',
      title: 'ToDo app con Angular',
      thumb: 'todo-thumb.png',
      text: 'Semplice CRUD spiegando ogni passo della realizzazione di un Angular App'
    },
    {
      path: 'introduzione-vscode',
      title: 'Introduzione a VSCode',
      thumb: 'vscode-thumb.png',
      text: 'Prima parte all\'introduzione del editor di codice più famoso del momento'
    },
    {
      path: 'template-driven-form',
      title: 'Template Driven Form',
      thumb: 'tutorial-cover-thumb.png',
      text: ' Tutorial sui template-driven-form di Angular e su come collegarli a Firestore'
    }
    ];

}

