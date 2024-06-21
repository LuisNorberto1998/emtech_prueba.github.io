import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { Layout1Component } from './layout1/layout1.component';
import { Layout2Component } from './layout2/layout2.component';
import { Layout3Component } from './layout3/layout3.component';
import { Layout4Component } from './layout4/layout4.component';
import { Layout5Component } from './layout5/layout5.component';

import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    Layout1Component,
    Layout2Component,
    Layout3Component,
    Layout4Component,
    Layout5Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbCarouselModule,
    CarouselModule
  ],
  exports: [
    Layout1Component,
    Layout2Component,
    Layout3Component,
    Layout4Component,
    Layout5Component
  ]
})
export class EmtechModule { }
