import { Component } from '@angular/core';
import { Cart } from '../model/card.model';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-cart-detail',
  templateUrl: 'cardDetail.component.html'
})
export class CartDetailComponent {
  constructor(
    public cart: Cart,
    private toast: ToasterService) { }

  checkout() {
    this.toast.pop('success', 'Успешно оформлено!');
  }
}
