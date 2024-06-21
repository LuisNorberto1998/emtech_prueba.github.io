import { Component, HostListener } from '@angular/core';
import { LayoutService } from '../../services/emtech/layout1.service';

@Component({
  selector: 'app-layout3',
  templateUrl: './layout3.component.html',
  styleUrl: './layout3.component.scss',
})
export class Layout3Component {
  isDesktop: boolean = window.innerWidth >= 1024;

  constructor(private layoutService: LayoutService) {}

  onLoad: boolean = false;
  randomUserData: any = [];

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isDesktop = window.innerWidth >= 1024;
  }

  ngOnInit(): void {
    this.isDesktop = window.innerWidth >= 1024;
    this.getRandomUser(4);
  }

  // Methods

  // Services
  getRandomUser(params: any): void {
    this.onLoad = true;

    this.layoutService.getRandomUser(params).subscribe({
      next: (data) => {
        console.log(data);

        this.randomUserData = data.results.map((user: any) => ({
          firstName: user.name.first,
          lastName: user.name.last,
          picture: user.picture.large, // Puedes usar 'medium' o 'thumbnail' según prefieras
          country: user.location.country,
        }));
        console.log('Random User Data:', this.randomUserData);

        if (this.isDesktop) {
          this.chunkRandomUserData();
        }
      },
      error: (error) => {
        console.error('Error fetching random user:', error);
      },
      complete: () => {
        this.onLoad = false;
      },
    });
  }


  chunkedRandomUserData: any[] = [];
  chunkRandomUserData(): void {
    if (this.randomUserData.length > 0) {
      this.chunkedRandomUserData = [];
      for (let i = 0; i < this.randomUserData.length; i += 4) {
        this.chunkedRandomUserData.push(this.randomUserData.slice(i, i + 4));
      }
    }
  }
  

}
