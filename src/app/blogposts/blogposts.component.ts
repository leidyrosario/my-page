import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Blog } from './models/blog.model';
import { filter, switchMap, take, tap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-blogposts',
  templateUrl: 'blogposts.component.html',
  styles: ['']
})


export class BlogpostsComponent {

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

}

