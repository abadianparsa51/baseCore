import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceProviderModel } from '../core/models/serviceProviderModel.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderProfileService {

  constructor(private http: HttpClient) { }
  getServiceProvidersProfile(): Observable<ServiceProviderModel[]> {
    return this.http.get<ServiceProviderModel[]>('assets/JsonData/serviceProviderProfile.json');
  }
}
