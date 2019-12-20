import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Post } from 'src/app/core/mocks/blogsMock';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() post: Post;
  @Output() selectedPost: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() {}

  selectPost(post: Post) {
    this.selectedPost.emit(post);
  }


}
