import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: any) {
    return this.http.post<any>(`${environment.serverURI}/auth/login`, user).pipe(
      map(res => {
        return this.setCredentials(res, user.remember);
      })
    )
  }

  setCredentials(data, remember) {
    let storage;
    remember ? storage = localStorage : storage = sessionStorage;
    storage.setItem('token', data.access_token);
    return data.role;
  }

}