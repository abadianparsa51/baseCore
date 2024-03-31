import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceProviderCardModel } from '../core/models/serviceProviderCardModel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderCardService {

  constructor(private http: HttpClient) { }
  getServiceProviders(): Observable<ServiceProviderCardModel[]> {
    return this.http.get<ServiceProviderCardModel[]>('assets/JsonData/serviceProviderCard.json');
  }
}
