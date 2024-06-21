import { Component } from '@angular/core';
import { LayoutService } from '../../services/emtech/layout1.service';

@Component({
  selector: 'app-layout3',
  templateUrl: './layout3.component.html',
  styleUrl: './layout3.component.scss',
})
export class Layout3Component {
  constructor(private layoutService: LayoutService) {}

  onLoad: boolean = false;
  randomUserData: any = [];

  ngOnInit(): void {
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
          country: user.location.country
        }));
        console.log('Random User Data:', this.randomUserData);
      },
      error: (error) => {
        console.error('Error fetching random user:', error);
      },
      complete: () => {
        this.onLoad = false;
      },
    });
  }
}
