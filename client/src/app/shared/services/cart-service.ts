import { computed, Service, signal } from '@angular/core';
import { Product } from '../models/product';

@Service()
export class CartService {
  readonly items = signal<Product[]>([]);
  add(product: Product): void {
    this.items.update((list) => [...list, product]);
  }
  readonly count = computed(() => this.items().length);
  readonly total = computed(() => this.items().reduce((sum, product) => sum + product.price, 0));
}
