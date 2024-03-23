import { HttpClient, HttpParams ,HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RootComponent } from'../../shared/roots/root.component';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends RootComponent {

  constructor(protected http :HttpClient,
    public override globalService: GlobalService,
    private router: Router,) {
      super(globalService);
  }

  checkLogin(username: string): Observable<any> {
    debugger
    const url = `${environment.baseUrl}Account/Customer/CheckUser?username=${username}`;

    return this.http.get(url, { observe: 'response' });
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['portal/pages/login']);
  }

  login(data?: any): Observable<any> {
    const ConnectToken = environment.identity + '/Connect/Token';
    const result: Subject<any> = new Subject();

    this.http.post(ConnectToken, data).subscribe(
      (res) => {
        result.next({ body: res });
      },
      (err) => {
        console.log('Login post error', err);

        let errorMessage = 'خطای سرور!!!';
        let errorStatus = err.status || 500;

        if (errorStatus === 429) {
          this.notification('warning', errorStatus, err.error.message);
        } else if (errorStatus === 500) {
          this.notification('danger', errorStatus, errorMessage);
          if (err.error.errors && err.error.errors.length) {
            for (let i = 0; i < err.error.errors.length; i++) {
              this.notification('warning', 'لیست خطا ها', err.error.errors[i]);
            }
          }
        } else {
          if (err.error.errors && err.error.errors.length) {
            for (let i = 0; i < err.error.errors.length; i++) {
              this.notification('warning', 'لیست خطا ها', err.error.errors[i]);
            }
          } else if (err.error.error_description) {
            this.notification('danger', 'خطا', err.error.error_description);
          } else {
            this.notification('danger', 'خطا ' + err.status, err.error.message);
          }
        }

        result.next({ body: err.error,
            status: errorStatus 
          });
      },
      () => {
        result.complete();
      }
    );

    return result;
  }

 
register(data: any): Observable<any> {
    const registerURL = `${environment.baseUrl}Customers/register`;
    const result: Subject<any> = new Subject();

    this.http.post(registerURL, data, { observe: 'response' }).subscribe(
      (res: any) => {
        result.next({ body: res.body, status: res.status });
      },
      (err: any) => {
        console.error('Error occurred:', err);
        result.error(err);
      },
      () => {
        result.complete();
      }
    );

    return result;
  }


  otpPost(username: string): Observable<any> {
    const baseUrl = environment.baseUrl;
    const url = `Account/otp?username=${username}`;
    const fullUrl = `${baseUrl}${url}`;

    const result: Subject<any> = new Subject<any>();

    const data = {}; // Define your data here

    this.http.post(fullUrl, data, { observe: 'response' })
      .subscribe(
        (res: HttpResponse<any>) => { // Specify HttpResponse<any> as the type for res
          result.next({ body: res.body, status: res.status });
        },
        (err) => {
          console.error('Error occurred:', err);
          result.error(err);
        },
        () => {
          result.complete();
        }
      );

    return result;
}
notification(type: string, title: string, message: string) {
  this.alertMessage({
    type: type,
    title: title,
    value: message,
  });
}
  
  isAuthenticated(): boolean {
    return localStorage.getItem('credential') != null;
  }

  getAccessToken(): string {
    if (this.isAuthenticated()) {
      const tokenString: string | null = localStorage.getItem('credential');
      if (tokenString !== null) {
        const token: any = JSON.parse(tokenString);
        return token.access_token;
      } else {
        // Handle the case where the token is not found in localStorage
        // You can return an empty string or throw an error
        return ''; // Default value
      }
    } else {
      // Handle the case where the user is not authenticated
      // For example, you can return an empty string or throw an error
      return ''; // Default value
    }
  }
  
  // refreshToken(token: string, refreshToken: string): Observable<any> {
  //   let params = new HttpParams()
  //     .set('client_id', 'axeto.web.angular')
  //     .set('client_secret', 'e3d67afe-f982-67ad-23bf-563d3a80b603')
  //     .set('grant_type', 'refresh_token')
  //     .set('scope', 'IdentityServerApi openid')
  //     .set('token', token)
  //     .set('refresh_token', refreshToken)
  //   return this.login('/Connect/Token', params)
  // }



}
