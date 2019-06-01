import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { Cart } from '../model/card.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html'
})
export class StoreComponent implements OnInit {
  selectedCategory: any;

  constructor(
    private repository: ProductRepository,
    private cart: Cart
  ) { }

  ngOnInit() {
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  get products(): Product[] {
    return this.repository.getProducts(this.selectedCategory);
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
  }

}
