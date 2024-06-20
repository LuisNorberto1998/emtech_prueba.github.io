/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Asegúrate de importar tu AppModule correctamente

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
