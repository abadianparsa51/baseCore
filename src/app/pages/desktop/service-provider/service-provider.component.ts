import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { ServiceProviderModel } from 'src/app/core/models/serviceProviderModel.model';
import { ServiceProviderProfileService } from 'src/app/services/service-provider-profile.service';
import { GalleryComponent } from 'src/app/shared/gallery/gallery.component';
import { ServiceProviderJobInformationsComponent } from 'src/app/shared/service-provider-job-informations/service-provider-job-informations.component';
import { ServiceProviderSpecialtiesComponent } from 'src/app/shared/service-provider-specialties/service-provider-specialties.component'
@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss']
})
export class ServiceProviderComponent implements OnInit, AfterViewInit {
  serviceProviderProfileModel: ServiceProviderModel[] = [];
  @ViewChildren('gallery') galleries!: QueryList<GalleryComponent>;

  @Input() serviceProvider: ServiceProviderModel[] = []

  items: { label: string, component: any }[] = [
    { label: 'نمونه کارها', component: GalleryComponent },
    { label: 'مشخصات', component: ServiceProviderSpecialtiesComponent },
    { label: 'Tab 3', component: GalleryComponent },
    { label: 'Tab 4', component: ServiceProviderJobInformationsComponent },
    { label: 'Tab 5', component: GalleryComponent },
    // { label: 'Tab 6', component: GalleryComponent },
  ];
  selectedTab: string | undefined;
  selectedIndex: number = 0;
  id?: string | null;
  numItems: any;
  constructor(
    private route: ActivatedRoute,
    private serviceProviderProfile: ServiceProviderProfileService,) {
    this.id = '';
  }

  selectTab(index: number) {
    this.selectedIndex = index;
  }

  onTabChange(event: MatTabChangeEvent) {
    this.selectedTab = this.items[event.index].label;
  }

  ngAfterViewInit(): void {

    this.galleries.forEach(gallery => {
      console.log(gallery); // This will log each app-gallery component instance
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    // this.rndomNumber();
    this.getServiceProvidersProfile();
    // console.log(this.gallery);
    this.numItems = this.items.length;
  }

  private getServiceProvidersProfile(): void {
    this.serviceProviderProfile.getServiceProvidersProfile()
      .subscribe(
        (serviceProviders: ServiceProviderModel[]) => {
          this.serviceProviderProfileModel = serviceProviders;
        },
        (error) => {
          console.error('Error fetching service providers:', error);
        }
      );
  }

}
