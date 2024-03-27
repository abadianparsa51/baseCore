import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { serviceProviderCardComponent } from './serviceProviderCard/serviceProviderCard.component';
import { FilterComponent } from './filter/filter.component';
import { ProviderProfileHeaderComponent } from './provider-profile-header/provider-profile-header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServiceProviderJobInformationsComponent } from './service-provider-job-informations/service-provider-job-informations.component';
import { ServiceProviderSpecialtiesComponent } from './service-provider-specialties/service-provider-specialties.component';
import { ServiceProviderLicensesActivitiesComponent } from './service-provider-licenses-activities/service-provider-licenses-activities.component';

@NgModule({
  declarations: [
    serviceProviderCardComponent,
    FilterComponent,
    ProviderProfileHeaderComponent,
    GalleryComponent,
    ServiceProviderJobInformationsComponent,
    ServiceProviderSpecialtiesComponent,
    ServiceProviderLicensesActivitiesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  exports: [
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    serviceProviderCardComponent,
    FilterComponent,
    ProviderProfileHeaderComponent,
    GalleryComponent,
    ServiceProviderJobInformationsComponent,
    ServiceProviderSpecialtiesComponent,
    ServiceProviderLicensesActivitiesComponent
  ],
})
export class SharedModule { }
