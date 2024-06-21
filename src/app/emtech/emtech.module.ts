import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout1Component } from './layout1/layout1.component';
import { Layout2Component } from './layout2/layout2.component';
import { Layout3Component } from './layout3/layout3.component';
import { SharedModule } from '../shared/shared.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    Layout1Component,
    Layout2Component,
    Layout3Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbCarouselModule
  ],
  exports: [
    Layout1Component,
    Layout2Component,
    Layout3Component
  ]
})
export class EmtechModule { }
