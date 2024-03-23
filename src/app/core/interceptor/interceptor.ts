
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, finalize, take, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/service/auth.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);


  constructor(
    private router: Router,
    private auth: AuthService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger
    if (req.url !== 'https://sts.axetostagingserver.ir/Connect/Token') {
      req = this.addToken(req, this.getJwtToken());
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // return this.handle401Error(req, next);
        }
        return throwError(error);
      })
    );
  }

  
  private addToken(request: HttpRequest<any>, token: string | null): HttpRequest<any> {
    const headers: { [key: string]: string } = {
      "X-AppType": "1",
      "X-DeviceType": "3",
      "Accept-Language": "fa-Ir",
      "ngsw-bypass": "true"
    };
  
    // Check if token is provided and not empty
    if (token && token.trim() !== '') {
      headers['Authorization'] = `Bearer ${token}`;
    }
  
    return request.clone({
      setHeaders: headers
    });
  }
  

  private getJwtToken(): string {
    const credential = localStorage.getItem('credential');
    return credential ? JSON.parse(credential).access_token : '';
  }
}
