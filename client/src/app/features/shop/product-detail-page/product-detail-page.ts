import { Component, computed, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { PRODUCTS } from '../../../shared/data/products.data';
import { Product } from '../../../shared/models/product';
import { CartService } from '../../../shared/services/cart-service';
import { Button } from '../../../shared/ui/button/button';

@Component({
  imports: [CurrencyPipe, Button],
  selector: 'app-product-detail-page',
  styleUrl: './product-detail-page.scss',
  templateUrl: './product-detail-page.html',
})
export class ProductDetailPage {
  private readonly cartService = inject(CartService);
  readonly id = input.required<string>();

  protected readonly product = computed(() => PRODUCTS.find((product) => product.id === this.id()));

  protected addToCart(product: Product): void {
    this.cartService.add(product);
  }
}
