import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  @Input() public product: Product;
  @Output() public addProductToCart = new EventEmitter();

  constructor(
  ) { }

  ngOnInit() {
  }

  addProduct(product) {
    this.addProductToCart.emit(product);
  }

}
