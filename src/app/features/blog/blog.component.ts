import { Component } from '@angular/core';
import { POSTS, Post } from '../../core/mocks/blogsMock';
import { AngularFirestore } from 'angularfire2/firestore';
import { Blog } from '../../blogposts/models/blog.model';
import { filter, switchMap, take, tap, toArray } from 'rxjs/operators';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  public POSTS = POSTS;
  public postToOpen: Post;
  public blog: Blog;
  public blogs: Blog[];

  constructor(private afs: AngularFirestore) {
    this.afs.collection<any>('blogs')
      .valueChanges()
      .pipe(
        take(1),
        switchMap(res => res),
        filter(res => res.published === true),
        toArray(),
      )
      .subscribe((res: Blog[]) => this.blogs = res);
  }

  loadPost(blogToLoad: Blog) {
    this.afs.collection<Blog[]>('blogs')
      .doc<Blog>(blogToLoad.id)
      .valueChanges()
      .subscribe(data => this.blog = data);
  }


  /*openSinglePost(post: Post) {
    this.postToOpen = post;
  }

  closeView() {
    delete this.postToOpen;
  }*/

}
