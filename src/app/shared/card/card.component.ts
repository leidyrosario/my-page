import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Post } from 'src/app/core/mocks/blogsMock';
import { Blog } from '../../blogposts/models/blog.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() post: Blog;
  @Output() selectedPost: EventEmitter<Blog> = new EventEmitter<Blog>();

  constructor() {}

  selectPost(post: Blog) {
    this.selectedPost.emit(post);
  }


}
