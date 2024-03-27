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
  selectedVegetables: any[] = []; // Array to store selected vegetables

  isSelected(vegetable: any): boolean {
    return this.selectedVegetables.includes(vegetable);
  }

  toggleSelection(vegetable: any): void {
    const index = this.selectedVegetables.findIndex(v => v === vegetable);

    if (index === -1) {
      // If the vegetable is not already selected, add it to the selectedVegetables array
      this.selectedVegetables.push(vegetable);
    } else {
      // If the vegetable is already selected, remove it from the selectedVegetables array
      this.selectedVegetables.splice(index, 1);
    }
    this.vegetables = this.vegetables.filter(v => !this.selectedVegetables.includes(v));
    this.vegetables.unshift(...this.selectedVegetables);
  }
}
