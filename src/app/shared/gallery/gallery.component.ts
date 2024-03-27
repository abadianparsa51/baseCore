import { Component, Input, OnInit } from '@angular/core';
import { ServiceProviderModel } from 'src/app/core/models/serviceProviderModel.model';
import { ServiceProviderProfileService } from 'src/app/services/service-provider-profile.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input()serviceProviderProfile:ServiceProviderModel[]=[];
  tiles: any[] = [];

  constructor(private serviceProviderProfileService: ServiceProviderProfileService) { }

  vegetables = [
    { name: 'Carrot' },
    { name: 'Broccoli' },
    { name: 'Lettuce' },
    { name: 'Broccoli' },
    { name: 'Lettuce' },
  ];
  selectedVegetables: any[] = []; // Array to store selected vegetables
  ngOnInit(): void {
    this.fetchServiceProviderProfileData();
  }

  fetchServiceProviderProfileData(): void {
    this.serviceProviderProfileService.getServiceProvidersProfile().subscribe(data => {
      // Assuming data contains an array of objects with image URLs
      this.tiles = data.map((item: any) => ({
        src: item.imageUrl,
        cols: 2,
        rows: item.workSamples.images.length * 0.5,
        color: 'lightpink' // You can customize the color as needed
      }));
    });
  }
  isSelected(vegetable: any): boolean {
    return this.selectedVegetables.includes(vegetable);
  }

  toggleSelection(vegetable: any): void {
    const index = this.selectedVegetables.findIndex(v => v === vegetable);

    if (index === -1) {
      // If the vegetable is not already selected, add it to the selectedVegetables array
      this.selectedVegetables.push(vegetable);
    } else {
      // If the vegetable is already selected, remove it from the selectedVegetables array
      this.selectedVegetables.splice(index, 1);
    }
    this.vegetables = this.vegetables.filter(v => !this.selectedVegetables.includes(v));
    this.vegetables.unshift(...this.selectedVegetables);
  }
}
