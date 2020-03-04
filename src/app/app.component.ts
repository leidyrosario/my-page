import { Component } from '@angular/core';
// import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';
import { routerTransition } from './router.animations';

@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  getDepth(outlet) {
    return outlet.activatedRouteData.depth;
  }
}
