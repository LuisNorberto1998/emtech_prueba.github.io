import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  scrollToInicio() {
    const element = document.getElementById('inicio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.navbarOpen = false; // Oculta el navbar desplegado
    }
  }
}
