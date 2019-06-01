import { Component } from '@angular/core';
import { Cart } from '../model/card.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: 'cardSummary.component.html'
})

export class CartSummaryComponent {
  constructor(public cart: Cart) { }
}
