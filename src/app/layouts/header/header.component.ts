import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() pageTitle!: string;

  constructor() { }

  goBack(): void {
    // Define the functionality to go back
  }

  goToPrevious(): void {
    // Define the functionality to go to the previous page
  }
}

