import { Component, Input } from '@angular/core';
import { CardData } from '../../core/models/serviceProviderCard';

@Component({
  selector: 'app-desktop-layout',
  templateUrl: './desktop-layout.component.html',
  styleUrls: ['./desktop-layout.component.scss']
})
export class DesktopLayoutComponent {
  CardData: CardData[] = []
  pageTitle!: 'متحصیصن';

}
