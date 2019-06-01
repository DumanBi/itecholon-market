import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { Cart } from './card.model';

@NgModule({
  providers: [ProductRepository, Cart]
})
export class ModelModule { }
