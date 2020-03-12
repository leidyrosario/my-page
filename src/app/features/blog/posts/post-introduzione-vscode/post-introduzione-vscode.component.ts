import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-introduzione-vscode',
  templateUrl: './post-introduzione-vscode.component.html',
  styles: [`blockquote {
    position: relative;
    padding-left: 1em;
    border-left: 0.2em solid lighten($black, 40%);
    font-family: 'Roboto', serif;
    font-size: $base-font-size;
    line-height: $base-line-height;
    font-weight: 100;
    &:before, &:after {
        content: '\201C';
        font-family: 'Sanchez';
        color: lighten($black, 40%);
     }
     &:after {
        content: '\201D';
     }
  }`]
})
export class PostIntroduzioneVscodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
