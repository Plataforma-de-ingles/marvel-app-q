import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import * as md5 from 'md5';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const ts = new Date().getTime();
    const hash = md5(ts + environment.privateKey + environment.publicKey);

    const modifiedRequest = request.clone({
      params: request.params
        .append('ts', ts.toString())
        .append('apikey', environment.publicKey)
        .append('hash', hash)
    });

    return next.handle(modifiedRequest).pipe(
      catchError((error) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }
}
