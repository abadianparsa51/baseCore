import { Component, OnInit } from '@angular/core';
import { ServiceProviderCardModel } from '../../../core/models/serviceProviderCardModel.model';
import { OnlineStatus } from 'src/app/core/enum/onlineStatus';
import { Router } from '@angular/router';
import { ServiceProviderCardService } from 'src/app/services/service-provider-card.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
@Component({
  selector: 'app-service-provider-list',
  templateUrl: './service-provider-list.component.html',
  styleUrls: ['./service-provider-list.component.scss']
})
export class ServiceProviderListComponent implements OnInit {
  serviceProviderCards: ServiceProviderCardModel[] = [];
  items: { label: string, component: any }[] = [
    { label: 'نمونه کارها', component: 2 },
    { label: 'مشخصات', component: 2 },
    { label: 'Tab 3', component: 2 },
    { label: 'Tab 4', component: 1 },
    { label: 'Tab 5', component: 3 },
    { label: 'Tab 6', component: 2 },
  ];
  selectedTab: string | undefined;
  selectedIndex: number = 0;
  constructor(private router: Router,
    private serviceProviderCardService: ServiceProviderCardService
  ) { }
  selectTab(index: number) {
    this.selectedIndex = index;
  }

  onTabChange(event: MatTabChangeEvent) {
    this.selectedTab = this.items[event.index].label;
  }
  ngOnInit(): void {
    this.getServiceProviders();
  }
  onCardClicked(id: string) {
    console.log('Clicked card ID:', id);
    this.router.navigate(['/service-provider', id]);
  }
  private getServiceProviders(): void {
    this.serviceProviderCardService.getServiceProviders()
      .subscribe(
        (serviceProviders: ServiceProviderCardModel[]) => {
          this.serviceProviderCards = serviceProviders;
        },
        (error) => {
          console.error('Error fetching service providers:', error);
        }
      );
  }
}
