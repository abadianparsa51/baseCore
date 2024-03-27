import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() pageTitle!: string;
  isTransparentBg = false;
  private routerSub: Subscription;

  constructor(private router: Router) {
    this.routerSub = new Subscription();
  }

  ngOnInit() {
    this.checkRoute(this.router.url); // Check the current route on component initialization
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkRoute(event.urlAfterRedirects);
      }
    });
  }
  private checkRoute(url: string): void {
    this.isTransparentBg = url.includes('service-provider');
  }
  // ngOnInit() {
  //   this.routerSub = this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       const url = event.urlAfterRedirects;
  //       this.isTransparentBg = url.includes('service-provider');
  //     }
  //   });
  // }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

  goBack(): void {
    // Define the functionality to go back
  }

  goToPrevious(): void {
    // Define the functionality to go to the previous page
  }
}

