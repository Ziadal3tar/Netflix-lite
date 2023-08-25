import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: BehaviorSubject<any> = new BehaviorSubject<any>('');
  private baseUrl = 'https://netflix-api-zeta.vercel.app/auth';

  constructor(private http: HttpClient) {}
  signUp(data: any): any {
    return this.http.post(`${this.baseUrl}/signUp`, data);
  }

  saveUser() {
    let decode: any = localStorage.getItem('userToken');
    this.userData.next(jwt_decode(decode));
  }

  login(data: any): any {
    return this.http.post(`${this.baseUrl}/signIn`, data);
  }
}
