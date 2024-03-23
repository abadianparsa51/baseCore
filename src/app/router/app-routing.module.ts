import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopComponent } from '../pages/desktop/desktop/desktop.component';
import { DesktopLayoutComponent } from '../layouts/desktop-layout/desktop-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DesktopLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/desktop/desktop.module').then(m => m.DesktopModule)
      }
    ]
  }
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('../layouts/layouts.module').then(
  //       (m) => m.LayoutsModule
  //     ),
  // },
  // {
  //   path: 'pages',
  //   loadChildren: () =>
  //     import('../pages/pages.module').then(
  //       (m) => m.PagesModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
