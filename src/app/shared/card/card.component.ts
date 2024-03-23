import { Component, Input } from '@angular/core';
import { CardData } from '../../core/models/serviceProviderCard'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() CardData!: CardData;

  order() {
    alert("شکیبا باشید !")
  }
}
