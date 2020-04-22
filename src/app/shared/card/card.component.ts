import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Post } from '../../features/blog/models/post.model';
import { title } from 'process';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() post: Post;

  defaultElevation = 2;
  raisedElevation = 8;


}
