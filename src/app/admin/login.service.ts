import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login, password) {
    return this.http.get('../assets/mock/token.json').pipe(map((res: any) => res));
  }

  checkStatus() {
    return this.http.get('../assets/mock/token.json').pipe(map((res: any) => res));
  }
}
