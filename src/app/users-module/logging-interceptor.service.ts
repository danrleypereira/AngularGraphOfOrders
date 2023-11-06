import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Log the request URL and method
    console.log(`Request: ${request.method} ${request.url}`);

    // Log the request body if present
    if (request.body) {
      console.log('Request Body:', request.body);
    }

    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          // Log the response status and body
          console.log(
            `Response Status: ${event.status}`,
            event.body ? 'Response Body:' : ''
          );
          if (event.body) {
            console.log(event.body);
          }
        }
      })
    );
  }
}
