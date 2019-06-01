import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toast: ToasterService
  ) { }

  ngOnInit() {
  }

  getLogin(l, p) {
    if (l === 'admin' && p === 'password') {
      this.loginService.login(l, p).subscribe((res) => {
        localStorage.setItem('token', JSON.stringify(res));
        this.router.navigate(['/admin/card']);
      });
    } else {
      this.toast.pop('error', 'Не верный логин пароль!')
    }
  }

}
