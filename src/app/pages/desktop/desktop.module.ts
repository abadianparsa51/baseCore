import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop/desktop.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'desktop',
    component: DesktopComponent
  }
]

@NgModule({
  declarations: [
    DesktopComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DesktopModule { }
