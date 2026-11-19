import { Component, computed, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../../shared/models/product';
import { CartService } from '../../../shared/services/cart-service';
import { ProductService } from '../../../shared/services/product-service';
import { Button } from '../../../shared/ui/button/button';

@Component({
  imports: [CurrencyPipe, Button],
  selector: 'app-product-detail-page',
  styleUrl: './product-detail-page.scss',
  templateUrl: './product-detail-page.html',
})
export class ProductDetailPage {
  private readonly cartService = inject(CartService);
  private readonly productService = inject(ProductService);
  readonly id = input.required<string>();

  protected readonly product = computed(() => {
    const products = this.productService.products.value() ?? [];
    return products.find((product) => product.id === this.id());
  });

  protected addToCart(product: Product): void {
    this.cartService.add(product);
  }
}
