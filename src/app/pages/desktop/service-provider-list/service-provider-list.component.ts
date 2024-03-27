import { Component, OnInit } from '@angular/core';
import { ServiceProviderCardModel } from '../../../core/models/serviceProviderCardModel.model';
import { OnlineStatus } from 'src/app/core/enum/onlineStatus';
import { Router } from '@angular/router';
import { ServiceProviderCardService } from 'src/app/services/service-provider-card.service';
@Component({
  selector: 'app-service-provider-list',
  templateUrl: './service-provider-list.component.html',
  styleUrls: ['./service-provider-list.component.scss']
})
export class ServiceProviderListComponent implements OnInit {
  serviceProviderCards: ServiceProviderCardModel[] = [];
constructor(private router: Router,
  private serviceProviderCardService: ServiceProviderCardService
  ) { }
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
