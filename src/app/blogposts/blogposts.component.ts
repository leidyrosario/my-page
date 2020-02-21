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
      .subscribe((res: Blog[]) => this.blogs = res);
  }

/*
  this.afs.collection<any>('blogs')
.valueChanges()
.pipe(
    take(2),
  switchMap(res => res),
  tap(res => console.log(res)),
  filter(res => res.published === true),
  tap( res => console.log('->', res)),
  toArray()
)
.subscribe( res => {
  console.log('RES: ', res)
  this.blogs = res;
});
*/
  loadPost(blogToLoad: Blog) {
    this.afs.collection<Blog[]>('blogs')
      .doc<Blog>(blogToLoad.id)
      .valueChanges()
      .subscribe(data => this.blog = data);
  }

}

