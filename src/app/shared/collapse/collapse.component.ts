import { Component } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrl: './collapse.component.scss'
})
export class CollapseComponent {
  isCollapsed = false;

  jsonDoIt = [
    { id: 0, title: "Digital talent review", description: "Ensuring your talent evolves simultaneously is critical in a rapidly changing technological landscape. With our Digital Talent Review, power your digital transformation by understanding your current digital skills, forecasting talent needs, and strategizing your talent roadmap.", titleButton: "Find out How", functionButton: () => {}},
    { id: 1, title: "Training academies", description: "EmTech Institute caters to professionals in corporations needing professional development in different technology areas. Our academies are designed to keep pace with the rapid evolution of technology, offering a cutting-edge learning experience.", titleButton: "Find out How", functionButton: () => {}},
    { id: 2, title: "Centers of excellence", description: "While technology provides the necessary infrastructure and tools, we offer specialized expertise and strategic guidance to ensure successful implementation, thus maximizing return on investment and positive business impact.", titleButton: "Find out How", functionButton: () => {}},
    { id: 3, title: "Talent acquisition", description: "We power technology talent acquisition by blending deep understanding, strategic sourcing, and holistic evaluation; we tailor our services to meet the unique needs of each client, ensuring a perfect fit between the talent and the corporate culture.", titleButton: "Find out How", functionButton: () => {}},
    { id: 4, title: "Talent ecosystems", description: "EmTech Institute works with governments, foundations, and universities to empower underserved populations with crucial technology skills, enabling them to access rewarding careers in the tech sector and contribute meaningfully to the competitiveness of their communities.", titleButton: "Find out How", functionButton: () => {}},
  ]

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
