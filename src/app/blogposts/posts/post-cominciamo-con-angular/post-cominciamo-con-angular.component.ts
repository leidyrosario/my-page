import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-cominciamo-con-angular',
  templateUrl: './post-cominciamo-con-angular.component.html',
  styleUrls: ['./post-cominciamo-con-angular.component.css']
})
export class PostCominciamoConAngularComponent implements OnInit {
  miaVar = `
  <div class="alert alert-danger">CIAO L'UNA</div>
  `;

  constructor() { }

  ngOnInit() {
  }

}
