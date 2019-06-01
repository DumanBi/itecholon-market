import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  host = 'localhost';
  port = '3500';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(`${this.host}:${this.port}/products`).pipe(map((res: Product[]) => res));
  }

  getProductsMock(): Observable<Product[]> {
    return this.http.get(`../assets/mock/products.json`).pipe(map((res: Product[]) => res));
  }
}
