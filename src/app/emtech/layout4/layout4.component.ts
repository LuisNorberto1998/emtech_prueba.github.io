import { Component } from '@angular/core';

@Component({
  selector: 'app-layout4',
  templateUrl: './layout4.component.html',
  styleUrl: './layout4.component.scss'
})
export class Layout4Component {

  customOptions: any = {
    loop: false,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  }
  
}
