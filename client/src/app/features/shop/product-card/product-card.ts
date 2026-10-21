import { Component, inject, input } from '@angular/core';
import { Button } from '../../../shared/ui/button/button';
import { Product } from '../../../shared/models/product';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../../shared/services/cart-service';

@Component({
  imports: [Button, CurrencyPipe],
  selector: 'app-product-card',
  styleUrl: './product-card.scss',
  templateUrl: './product-card.html',
})
export class ProductCard {
  private readonly cartService = inject(CartService);
  readonly product = input.required<Product>();
  protected addToCart(): void {
    this.cartService.add(this.product());
    console.log('Im Warenkorb:', this.cartService.items());
  }
}
