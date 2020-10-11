import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {InjectRequestHeadersInterceptor} from './inject-request-headers.interceptor';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InjectRequestHeadersInterceptor,
    multi: true,
  },
];
