import { Component } from '@angular/core';
import { POSTS, Post } from '../../core/mocks/blogsMock';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  public POSTS = POSTS;
  public postToOpen: Post;

  constructor() { }
  openSinglePost(post: Post) {
    this.postToOpen = post;
  }

  closeView() {
    delete this.postToOpen;
  }

}
