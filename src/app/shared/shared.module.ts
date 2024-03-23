import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [

    CardComponent,
    FilterComponent
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
    CardComponent,
    FilterComponent
  ],
})
export class SharedModule { }
