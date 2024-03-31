import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceProviderCardModel } from '../../core/models/serviceProviderCardModel.model'
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-card',
  templateUrl: './serviceProviderCard.component.html',
  styleUrls: ['./serviceProviderCard.component.scss']
})
export class serviceProviderCardComponent {
  @Input() cardData: ServiceProviderCardModel[] = [];
  @Output() cardClicked = new EventEmitter<string>();

  items: { label: string, component: any }[] = [
    { label: 'نمونه کارها', component: 1 },
    { label: 'مشخصات', component: 2 },
    { label: 'Tab 3', component: 3 },
    { label: 'Tab 4', component: 4 },
    { label: 'Tab 5', component: 5 },
    { label: 'Tab 6', component: 6 },
  ];
  selectedTab: string | undefined;
  selectedIndex: number = 0;
  selectTab(index: number) {
    this.selectedIndex = index;
  }

  onTabChange(event: MatTabChangeEvent) {
    this.selectedTab = this.items[event.index].label;
  }



  order() {
    alert("شکیبا باشید !")
  }
  onCardClicked(id: string) {
    this.cardClicked.emit(id);
  }
}
