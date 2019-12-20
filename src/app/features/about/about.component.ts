import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import {trigger, stagger, animate, style, group, query as q, transition, keyframes, state} from '@angular/animations';
/*
const query = (s, a, o= {optional: true}) => q(s, a, o);

export const aboutTransition = trigger('aboutTransition', [
  transition(':enter', [
    query('.section-title, .service, .process, .tools, .fun-fact', style({ opacity: 0 })),
    query('.section-title, .service, .process, .tools, .fun-fact', stagger(300, [
      style({ transform: 'translateY(100px)' }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)'), style({transform: 'translateY(0px)', opacity: 1})
    ]),
    ),
  ]),
transition(':leave', [
    query('.content', stagger(300, [
      style({ transform: 'translateY(0px)', opacity: 1 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)'), style({transform: 'translateY(100px)', opacity: 0})]),
    )]),
]);


export const scrollAnimation = trigger('scrollAnimation, aboutTransition', [
  state(':enter', style({ opacity: 1, transform: 'translateY(0)' })),
  transition(':enter', [
    query('.section-title, .process, .tools, .fun-fact', style({ opacity: 0 })),
    query('.section-title, .process, .tools, .fun-fact', stagger(300, [
      style({ transform: 'translateY(100px)' }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)'), style({transform: 'translateY(0px)', opacity: 1}),
    ])),
  ]),
  state(':leave', style({ opacity: 0, transform: 'translateY(-100%)' })),
  transition(':leave', [
    query('.content', stagger(300, [
      style({ transform: 'translateY(0px)', opacity: 1 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)'), style({transform: 'translateY(100px)', opacity: 0})]),
    )]),
]);
*/

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [ /*aboutTransition, scrollAnimation*/ ]
  // tslint:disable-next-line:use-host-property-decorator
  /*host: {
    '[@aboutTransition]': '',
    '[@scrollAnimation]': '',
  }*/
})
export class AboutComponent implements OnInit {
  /*state = ':enter';

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= componentPosition) {
        this.state = ':enter';
      } else {
        this.state = ':leave';
      }

    }
*/
    constructor() {}

  ngOnInit() {
  }

}
