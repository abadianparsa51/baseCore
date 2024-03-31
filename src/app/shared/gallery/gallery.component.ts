import { Component, Input, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
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
  @Input() serviceProviderProfile: ServiceProviderModel[] = [];
  tiles: any[] = [];
  items: { label: string, component: any }[] = [
    { label: 'نمونه کارها', component: GalleryComponent },
    { label: 'مشخصات', component: GalleryComponent },
    { label: 'Tab 3', component: GalleryComponent },
    { label: 'Tab 4', component: GalleryComponent },
    { label: 'Tab 5', component: GalleryComponent },
    { label: 'Tab 6', component: GalleryComponent },
  ];
  selectedTab: string | undefined;
  selectedIndex: number = 0;
  numItems: any;
  constructor(private serviceProviderProfileService: ServiceProviderProfileService) { }

  selectTab(index: number) {
    this.selectedIndex = index;
  }

  onTabChange(event: MatTabChangeEvent) {
    this.selectedTab = this.items[event.index].label;
  } // Array to store selected vegetables
  ngOnInit(): void {
    this.fetchServiceProviderProfileData();
    this.numItems = this.items.length;
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

}
