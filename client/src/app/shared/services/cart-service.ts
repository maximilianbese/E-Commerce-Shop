import { Service, signal } from '@angular/core';
import { Product } from '../models/product';

@Service()
export class CartService {
  readonly items = signal<Product[]>([]);
  add(product: Product): void {
    this.items.set([]);
  }
}
