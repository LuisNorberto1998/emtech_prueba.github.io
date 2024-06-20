import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CollapseComponent } from './collapse/collapse.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CollapseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CollapseComponent
  ]
})
export class SharedModule { }
