import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  vegetables = [
    { name: 'Carrot' },
    { name: 'Broccoli' },
    { name: 'Lettuce' },
    { name: 'Broccoli' },
    { name: 'Lettuce' },
    // { name: 'Broccoli' },
    // { name: 'Lettuce' },
    // { name: 'Broccoli' },
    // { name: 'Lettuce' },
    // { name: 'Broccoli' },
    // { name: 'Lettuce' },
  ];
}
