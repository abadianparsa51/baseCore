import { Component } from '@angular/core';
import { CardData } from '../../../core/models/serviceProviderCard';
import { OnlineStatus } from 'src/app/core/enum/onlineStatus';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  cardData: CardData = {
    imageUrl: '/src/assets/img/spCardBg.jpg',
    altText: 'Alt Text',
    name: 'John Doe',
    subtitle: 'Editor',
    online: OnlineStatus.Online,
    starRating: 4.5,
    city: 'New York',
    cityRating: 8,
    category: 'Photography',
    categoryRating: 7,
    price: 50000
  };
}
