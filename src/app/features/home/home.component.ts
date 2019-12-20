import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: []
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    const options = {
      strings: ['a Blogger.', 'a Web Lover.', 'an Adventurer.', 'a Freelancer.'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: false
 };

    const typed = new Typed('.typed-element', options);
  }

}
