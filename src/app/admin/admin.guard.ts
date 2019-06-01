import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = atob(JSON.parse(localStorage.getItem('token')).key).split('+');
    if (token && token.length && token[1] === 'password') {
      return true;
    } else {
      return this.loginService.checkStatus().pipe(map((res) => {
        const t = res.key.split('+');
        if (t && t.length && t[1] === 'password') {
          return true;
        }
      }));
    }
  }

}
