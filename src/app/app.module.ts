import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { EmtechModule } from './emtech/emtech.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, // Importar RouterModule si se utilizan rutas en la aplicación
    SharedModule,
    EmtechModule,
    NgbModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
