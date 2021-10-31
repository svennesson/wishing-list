import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from '../service/auth.service';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!req.url.includes('/login') && !req.url.includes('/register')) {

      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getAuthToken()}`
        }
      });
    }

    return this.handleResponse(req, next);
  }

  private handleResponse(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        tap((event: HttpEvent<any>) => event),
        catchError(error => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401 || error.status === 403) {
              this.authService.logoutUser();
            }
          }
          return throwError(error);
        })
      );
  }
}
