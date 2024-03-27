import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceProviderCardModel } from '../../core/models/serviceProviderCardModel.model'

@Component({
  selector: 'app-card',
  templateUrl: './serviceProviderCard.component.html',
  styleUrls: ['./serviceProviderCard.component.scss']
})
export class serviceProviderCardComponent {
  @Input() cardData: ServiceProviderCardModel[]=[];
  @Output() cardClicked = new EventEmitter<string>();

  order() {
    alert("شکیبا باشید !")
  }
  onCardClicked(id: string) {
    this.cardClicked.emit(id);
  }
}
