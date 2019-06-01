import { Component } from '@angular/core';
import { Cart } from '../model/card.model';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html'
})
export class CardComponent {
  constructor(
    public cart: Cart,
    public router: Router,
    private toast: ToasterService) { }

  checkout() {
    this.toast.pop('success', 'Успешно оформлено!');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
