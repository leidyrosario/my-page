import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  template: `
  <div class='row'>
    <div id='image_map'>
      <map name='map_example'>
        <area shape='poly' coords='0.847,0.885, 1.133,0.669, 1.451,1.085, 1.176,1.225' (click)='selectPart(546)'>
        <area shape='poly' coords='1.171,0.604, 1.548,0.416, 1.813,0.988, 1.511,1.052' (click)='selectPart(547)'>
      </map>
      <img src='https://picsum.photos/557/441' alt='image map example' width='557' height='441' usemap='#map_example'>
    </div>
  </div>
    `,
  styles: []
})
export class MapComponent implements OnInit {

  constructor() { }

  selectPart(part: number) {
    console.log('Selected part: ', part);
  }

  ngOnInit() {
  }

}
