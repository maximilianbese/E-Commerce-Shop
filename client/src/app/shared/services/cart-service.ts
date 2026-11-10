import { computed, Service, signal } from '@angular/core';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';

@Service()
export class CartService {
  readonly items = signal<CartItem[]>([]);
  add(product: Product): void {
    this.items.update((list) => [...list, item]);
  }
  readonly count = computed(() => this.items().length);
  readonly total = computed(() =>
    this.items().reduce((sum, item) => sum + item.product.price * item.quantity, 0),
  );
}
