import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DesktopLayoutComponent } from './desktop-layout/desktop-layout.component';
// import { AppRoutingModule } from '../router/app-routing.module'; 
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DesktopLayoutComponent
  ],
  imports: [
    CommonModule,
    // AppRoutingModule,
    MaterialModule,
    RouterModule,
    SharedModule
  ],
})
export class LayoutsModule { }
