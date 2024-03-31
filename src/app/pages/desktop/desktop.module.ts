import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop/desktop.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServiceProviderListComponent } from './service-provider-list/service-provider-list.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { ServiceProviderSpecificationsComponent } from './service-provider-specifications/service-provider-specifications.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceProviderListComponent
  },
  { path: 'service-provider/:id', component: ServiceProviderComponent },
  {
    path: 'desktop',
    component: DesktopComponent
  }
]

@NgModule({
  declarations: [
    DesktopComponent,
    ServiceProviderListComponent,
    ServiceProviderComponent,
    ServiceProviderSpecificationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DesktopModule { }
