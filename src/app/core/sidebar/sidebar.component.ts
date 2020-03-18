import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menuIsOpen = false;

  public url: string;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  goto(url: string) {
    this.router.navigate(['blog', url]);
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        tap(res => console.log('RES: ', res))
      )
      .subscribe(params => this.url = params.get('blog'));
  }

}
