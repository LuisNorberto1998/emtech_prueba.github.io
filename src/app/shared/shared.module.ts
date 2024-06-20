import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CollapseComponent } from './collapse/collapse.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HeaderComponent,
    CollapseComponent
  ],
  imports: [
    CommonModule,
    NgbCollapseModule
  ],
  exports: [
    HeaderComponent,
    CollapseComponent
  ]
})
export class SharedModule { }
