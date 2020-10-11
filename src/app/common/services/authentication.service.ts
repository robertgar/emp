import {Injectable} from '@angular/core';
import {API} from '../../config/api';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(public http: HttpClient) { }

  public login(email: string, password: string) {

    const url = `${API.AUTH_SERVICES_BASE_URL}/auth/login`;
    return this.http.post(url, {email, password});
  }

  public logout() {

  }

  public isLoggedIn() {

  }
}
