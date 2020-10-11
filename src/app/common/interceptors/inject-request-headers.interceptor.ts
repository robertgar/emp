import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class InjectRequestHeadersInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = {
      'Content-Type': 'application/json',
      // 'api-token': 'My token'
      // 'api-locale
    };

    request = request.clone({
      setHeaders: headers,
    });
    return next.handle(request);
  }

}
